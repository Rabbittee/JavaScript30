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
var select = function (query) {
  return document.querySelector(query);
};
var lerp = function (v0, v1, t) {
  return v0 * (1 - t) + v1 * t;
};
state({
  range: { min: 0.25, max: 4 },
  rate: 1,
  percent: 25,
})
  .observe(function (_, dispatch) {
    select('.speed').addEventListener('mousemove', function (_a) {
      var target = _a.target,
        offsetY = _a.offsetY;
      if (target instanceof HTMLDivElement) {
        dispatch({
          type: 'move',
          payload: offsetY / target.clientHeight,
        });
      }
    });
  })
  .reduce(function (state, action) {
    if (action.type === 'move') {
      return __assign(__assign({}, state), {
        percent: Math.round(action.payload * 100),
        rate: lerp(state.range.min, state.range.max, action.payload),
      });
    }
    return state;
  })
  .then(function (_a) {
    var percent = _a.percent;
    select('.speed-bar').style.setProperty('--height', ''.concat(percent, '%'));
  })
  .then(function (_a) {
    var rate = _a.rate;
    select('.speed-bar').textContent = ''.concat(rate.toFixed(1), 'x');
  })
  .then(function (_a) {
    var rate = _a.rate;
    select('video').playbackRate = rate;
  });
