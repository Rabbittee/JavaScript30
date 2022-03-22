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
var tap = function (fn) {
  return function (value) {
    return fn(value), value;
  };
};
var map = function (fn) {
  return function (list) {
    return list.map(fn);
  };
};
var join = function (token) {
  return function (list) {
    return list.join(token);
  };
};
var functor = function (value) {
  return {
    map: function (fn) {
      return functor(fn(value));
    },
  };
};
var select = function (query) {
  return document.querySelector(query);
};
var selectAll = function (query) {
  return Array.from(document.querySelectorAll(query));
};
var time = {
  second: function (time) {
    return Number(time) * 1000;
  },
  minute: function (time) {
    return Number(time) * 1000 * 60;
  },
};
var form = function (element) {
  return function (key) {
    return String(new FormData(element).get(key));
  };
};
var padStart = function (length, fill) {
  return function (value) {
    return String(value).padStart(length, fill);
  };
};
var assign = function (target, key) {
  return function (value) {
    var _a;
    return Object.assign(target, ((_a = {}), (_a[key] = value), _a));
  };
};
var timeFormat = function (ms) {
  return new Date(ms).toTimeString();
};
var clearTimer = function (state, _action, dispatch) {
  if (state.timer && state.rest === 0) {
    clearTimeout(state.timer);
    dispatch({ type: 'reset' });
  }
};
var nextTick = function (state, _action, dispatch) {
  if (state.rest <= 0) return;
  var timer = setTimeout(function () {
    return dispatch({ type: 'countdown', timer: timer });
  }, time.second(1));
};
var displayTimeLeft = function (state) {
  return functor(state)
    .map(function (_a) {
      var rest = _a.rest;
      return new Date(rest);
    })
    .map(function (date) {
      return [date.getUTCMinutes(), date.getUTCSeconds()];
    })
    .map(map(padStart(2, '0')))
    .map(join(':'))
    .map(tap(assign(select('.display__time-left'), 'textContent')))
    .map(tap(assign(document, 'title')));
};
var displayEndTime = function (state) {
  return functor(state)
    .map(function (_a) {
      var rest = _a.rest;
      return new Date(Date.now() + rest);
    })
    .map(function (date) {
      return [date.getHours(), date.getMinutes()];
    })
    .map(map(padStart(2, '0')))
    .map(join(':'))
    .map(function (time) {
      return 'Be Back At '.concat(time);
    })
    .map(tap(assign(select('.display__end-time'), 'textContent')));
};
state({
  timer: undefined,
  rest: 0,
})
  .observe(function (_, dispatch) {
    selectAll('[data-time]')
      //
      .forEach(function (button) {
        return button.addEventListener('click', function () {
          return dispatch({
            type: 'initial',
            rest: time.second(button.dataset['time']),
          });
        });
      });
    select('#custom')
      //
      .addEventListener('submit', function (e) {
        e.preventDefault();
        if (!(e.target instanceof HTMLFormElement)) return;
        dispatch({
          type: 'initial',
          rest: time.minute(form(e.target)('minutes')),
        });
      });
  })
  .reduce(function (state, action) {
    if (action.type === 'initial') {
      return __assign(__assign({}, state), { rest: action.rest });
    }
    if (action.type === 'reset') {
      return __assign(__assign({}, state), { timer: undefined });
    }
    if (action.type === 'countdown') {
      return __assign(__assign({}, state), {
        rest: state.rest - time.second(1),
        timer: action.timer,
      });
    }
    return state;
  })
  .then(displayTimeLeft)
  .then(displayEndTime)
  .then(clearTimer)
  .then(nextTick);
