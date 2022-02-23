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
  var block = false;
  function dispatch(action) {
    if (reducer) value = reducer(value, action);
    if (block) return;
    block = true;
    setTimeout(function () {
      effects.forEach(function (effect) {
        return effect(value, action, dispatch);
      });
      block = false;
    }, 150);
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
var selectBy = function (query) {
  return function (target) {
    return target.querySelector(query);
  };
};
var select = function (query) {
  return document.querySelector(query);
};
var selectAll = function (query) {
  return Array.from(document.querySelectorAll(query));
};
var mergeLeft = function (a) {
  return function (b) {
    return __assign(__assign({}, b), a);
  };
};
var setPropertyTo = function (el) {
  return function (key, value) {
    return el.style.setProperty('--'.concat(key), value);
  };
};
var px = function (value) {
  return value + 'px';
};
var toRect = function (el) {
  return el.getBoundingClientRect();
};
var delay = function (ms) {
  return new Promise(function (resolve) {
    return setTimeout(resolve, ms);
  });
};
var selectDropDown = selectBy('.dropdown');
state({
  visible: false,
  dropdownRect: { width: 0, height: 0, x: 0, y: 0 },
})
  //
  .observe(function (initialState, dispatch) {
    function onHover(_a) {
      var target = _a.target;
      if (!(target instanceof HTMLElement)) return;
      var nav = toRect(select('.top'));
      var dropdown = toRect(selectDropDown(target.parentElement));
      dispatch({
        type: 'hover',
        payload: {
          width: dropdown.width,
          height: dropdown.height,
          x: dropdown.x - nav.x,
          y: dropdown.y - nav.y,
        },
      });
    }
    function onLeave() {
      dispatch({
        type: 'leave',
        payload: initialState.dropdownRect,
      });
    }
    selectAll('.cool > li > a')
      .map(
        tap(function (el) {
          return el.addEventListener('pointerenter', onHover);
        })
      )
      .map(
        tap(function (el) {
          return el.addEventListener('pointerleave', onLeave);
        })
      );
  })
  .reduce(function (state, action) {
    if (action.type === 'hover') {
      return __assign(__assign({}, state), { visible: true, dropdownRect: action.payload });
    }
    if (action.type === 'leave') {
      return __assign(__assign({}, state), { visible: false, dropdownRect: action.payload });
    }
    return state;
  })
  .then(function (_a) {
    var dropdownRect = _a.dropdownRect,
      visible = _a.visible;
    functor(select('.dropdownBackground'))
      .map(setPropertyTo)
      .map(
        tap(function (set) {
          return set('width', px(dropdownRect.width));
        })
      )
      .map(
        tap(function (set) {
          return set('height', px(dropdownRect.height));
        })
      )
      .map(
        tap(function (set) {
          return set('x', px(dropdownRect.x));
        })
      )
      .map(
        tap(function (set) {
          return set('y', px(dropdownRect.y));
        })
      )
      .map(
        tap(function (set) {
          return set('opacity', visible ? '1' : '0');
        })
      );
  })
  .then(function (_a) {
    var visible = _a.visible;
    return selectAll('.dropdown').forEach(function (el) {
      var current = el.parentElement.matches(':hover');
      el.classList.toggle('open', current && visible);
    });
  });
