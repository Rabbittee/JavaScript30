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
            return effects.forEach(function (effect) { return effect(value, action, dispatch); });
        });
    }
    function observe(source) {
        queueMicrotask(function () { return source(dispatch); });
        return combiner;
    }
    return { observe: observe };
}
var select = function (query) {
    return document.querySelector(query);
};
function Plate(_a) {
    var name = _a.name, done = _a.done;
    return /*html */ "\n    <li>\n        <input type=\"checkbox\" id=\"".concat(name, "\" ").concat(done ? "checked" : "", " />\n        <label for=\"").concat(name, "\">").concat(name, "</label>\n    </li>\n    ");
}
var save = function (_a) {
    var storage = _a.storage, items = _a.items;
    return storage.setItem("items", JSON.stringify(items));
};
var render = function (_a) {
    var renderer = _a.renderer, items = _a.items;
    return (renderer.innerHTML = items.map(Plate).join(""));
};
state({
    storage: window.localStorage,
    renderer: select(".plates"),
    items: JSON.parse(window.localStorage.getItem("items"))
})
    //
    .observe(function (dispatch) {
    select(".add-items").addEventListener("submit", function (event) {
        event.preventDefault();
        var element = event.currentTarget;
        if (!(element instanceof HTMLFormElement))
            return;
        var form = new FormData(element);
        dispatch({
            type: "add",
            item: { name: String(form.get("item")), done: false }
        });
        element.reset();
    });
    select(".plates").addEventListener("change", function (_a) {
        var target = _a.target;
        if (!(target instanceof HTMLInputElement))
            return;
        dispatch({
            type: "update",
            item: { name: target.id, done: target.checked }
        });
    });
    dispatch({ type: "init" });
})
    .reduce(function (state, action) {
    if (action.type === "add")
        return __assign(__assign({}, state), { items: state.items.concat(action.item) });
    if (action.type === "update")
        return __assign(__assign({}, state), { items: state.items.map(function (item) {
                return item.name === action.item.name ? action.item : item;
            }) });
    return state;
})
    .then(save)
    .then(render);
