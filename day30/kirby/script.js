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
var selectAll = function (query) {
  return Array.from(document.querySelectorAll(query));
};
function randomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var randomPick = function (list) {
  return list[randomBetween(0, list.length - 1)];
};
var positive = function (value) {
  return Math.max(value, 0);
};
var second = function (value) {
  return value * 1000;
};
var frameUpdate = function (fn) {
  var start = performance.now();
  return requestAnimationFrame(function () {
    var current = performance.now();
    fn(current - start);
  });
};
state({
  totalTime: second(10),
  holes: [1, 2, 3, 4, 5, 6],
  randomTimeRange: { min: 200, max: 1000 },
  restTime: 0,
  nextPeep: 0,
  timer: undefined,
  currentHole: undefined,
  scores: 0,
})
  .observe(function (state, dispatch) {
    select('button')
      //
      .addEventListener('click', function () {
        return dispatch({ type: 'start' });
      });
    state.holes.forEach(function (id) {
      return (
        select('.hole'.concat(id, ' .mole'))
          //
          .addEventListener('click', function () {
            return dispatch({ type: 'bonk', hole: id });
          })
      );
    });
  })
  .reduce(function (state, action) {
    if (action.type === 'start') {
      return __assign(__assign({}, state), { restTime: state.totalTime, scores: 0 });
    }
    if (action.type === 'bonk') {
      return __assign(__assign({}, state), { scores: state.scores + 1 });
    }
    if (action.type === 'timer') {
      return __assign(__assign({}, state), { timer: action.timer });
    }
    if (action.type === 'countdown') {
      return __assign(__assign({}, state), {
        timer: undefined,
        restTime: positive(state.restTime - action.deltaTime),
        nextPeep: positive(state.nextPeep - action.deltaTime),
      });
    }
    if (action.type === 'peep') {
      return __assign(__assign({}, state), { nextPeep: action.nextPeep, currentHole: action.hole });
    }
    return state;
  })
  .then(function (state, action, dispatch) {
    if (action.type === 'start') {
      cancelAnimationFrame(state.timer);
      dispatch({
        type: 'timer',
        timer: frameUpdate(function (deltaTime) {
          return dispatch({ type: 'countdown', deltaTime: deltaTime });
        }),
      });
    }
  })
  .then(function (state, action, dispatch) {
    if (state.restTime > 0 && action.type === 'countdown') {
      dispatch({
        type: 'timer',
        timer: frameUpdate(function (deltaTime) {
          return dispatch({ type: 'countdown', deltaTime: deltaTime });
        }),
      });
    }
  })
  .then(function (state, _action, dispatch) {
    if (state.restTime <= 0 || state.nextPeep > 0) return;
    dispatch({
      type: 'peep',
      hole: randomPick(state.holes),
      nextPeep: randomBetween(state.randomTimeRange.min, state.randomTimeRange.max),
    });
  })
  .then(function (state) {
    if (!state.currentHole) return;
    selectAll('.hole')
      //
      .forEach(function (hole) {
        return hole.classList.toggle(
          'up',
          hole.matches('.hole'.concat(state.currentHole))
          //
        );
      });
  })
  .then(function (state) {
    if (state.restTime <= 0) {
      selectAll('.hole')
        //
        .forEach(function (hole) {
          return hole.classList.remove('up');
        });
    }
  })
  .then(function (_state, action) {
    var _a;
    if (action.type === 'bonk') {
      (_a = select('.hole'.concat(action.hole))) === null || _a === void 0
        ? void 0
        : _a.classList.remove('up');
    }
  })
  .then(function (state, action) {
    if (action.type === 'bonk') {
      select('.score').textContent = String(state.scores);
    }
  });
