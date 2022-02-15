var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var select = function (query) {
    return document.querySelector(query);
};
var selectAll = function (query) {
    return Array.from(document.querySelectorAll(query));
};
function isKeyboardEvent(e) {
    return e instanceof KeyboardEvent;
}
function isInputElement(e) {
    return e instanceof HTMLInputElement;
}
function state(value) {
    var reducer = undefined;
    var effects = [];
    var subject = {
        then: function (effect) {
            effects.push(effect);
            return subject;
        }
    };
    var combiner = __assign(__assign({}, subject), { reduce: function (_reducer) {
            reducer = _reducer;
            return subject;
        } });
    function dispatch(action) {
        if (reducer)
            value = reducer(value, action);
        queueMicrotask(function () {
            effects.forEach(function (effect) { return effect(value, action, dispatch); });
        });
    }
    function observe(source) {
        source(dispatch);
        return combiner;
    }
    return { observe: observe };
}
var inRange = function (bound1, bound2) { return function (value) {
    var _a = bound1 > bound2 ? [bound2, bound1] : [bound1, bound2], min = _a[0], max = _a[1];
    return min <= value && value <= max;
}; };
function keypress(key) {
    var holding = false;
    window.addEventListener("keydown", function (e) {
        if (!isKeyboardEvent(e))
            return;
        if (e.key === key)
            holding = true;
    });
    window.addEventListener("keyup", function (e) {
        if (!isKeyboardEvent(e))
            return;
        holding = false;
    });
    return {
        get holding() {
            return holding;
        }
    };
}
state({
    lastIndex: undefined,
    key: keypress("Shift"),
    inputs: selectAll(".inbox .item input")
})
    .observe(function (dispatch) {
    select(".inbox").addEventListener("change", function (_a) {
        var target = _a.target;
        return isInputElement(target) && dispatch({ type: "change", target: target });
    });
})
    .reduce(function (state, action) {
    if (action.type === "update")
        return __assign(__assign({}, state), { lastIndex: action.lastIndex });
    return state;
})
    .then(function (state, action, dispatch) {
    if (action.type !== "change" || !action.target.checked)
        return;
    var index = state.inputs.findIndex(function (item) { return action.target === item; });
    if (index < 0)
        return;
    dispatch({ type: "update", lastIndex: index });
    if (state.lastIndex === undefined || !state.key.holding)
        return;
    state.inputs
        .filter(function (_, current) { return inRange(state.lastIndex, index)(current); })
        .forEach(function (input) { return (input.checked = true); });
});
