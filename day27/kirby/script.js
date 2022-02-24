var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
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
    },
  };
  var combiner = __assign(__assign({}, subject), {
    reduce: function (_reducer) {
      reducer = _reducer;
      return subject;
    },
  });
  function dispatch(action) {
    if (reducer) value = reducer(value, action);
    queueMicrotask(function () {
      effects.forEach(function (effect) {
        return effect(value, action, dispatch);
      });
    });
  }
  function observe(source) {
    queueMicrotask(function () {
      return source(value, dispatch);
    });
    return combiner;
  }
  return { observe: observe };
}
var functor = function (val) {
  return {
    map: function (fn) {
      return functor(fn(val));
    },
  };
};
var tap = function (fn) {
  return function (val) {
    return fn(val), val;
  };
};
var select = function (query) {
  return document.querySelector(query);
};
state({
  pressing: false,
  anchor: 0,
  movement: 0,
  scroll: select('.items').scrollLeft,
})
  .observe(function (_, dispatch) {
    functor(select('.items'))
      //
      .map(
        tap(function (el) {
          return el.addEventListener('pointerdown', function (e) {
            return dispatch({
              type: 'down',
              payload: e.clientX,
            });
          });
        })
      )
      .map(
        tap(function (el) {
          return el.addEventListener('pointermove', function (e) {
            return dispatch({
              type: 'move',
              payload: e.clientX,
            });
          });
        })
      )
      .map(
        tap(function (el) {
          return el.addEventListener('pointerup', function () {
            return dispatch({
              type: 'up',
            });
          });
        })
      );
  })
  .reduce(function (state, action) {
    if (action.type === 'down') {
      return __assign(__assign({}, state), { pressing: true, anchor: action.payload });
    }
    if (state.pressing && action.type === 'move') {
      return __assign(__assign({}, state), { movement: state.anchor - action.payload });
    }
    if (action.type === 'up') {
      return {
        pressing: false,
        anchor: 0,
        movement: 0,
        scroll: state.scroll + state.movement,
      };
    }
    return state;
  })
  .then(function (_a) {
    var pressing = _a.pressing;
    return select('.items').classList.toggle('active', pressing);
  })
  .then(function (_a) {
    var pressing = _a.pressing,
      scroll = _a.scroll,
      movement = _a.movement;
    if (pressing) select('.items').scrollLeft = scroll + movement;
  });
