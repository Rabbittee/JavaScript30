var select = function (qs) {
  return document.querySelector(qs);
};
var tap = function (fn) {
  return function (arg) {
    return fn(arg), arg;
  };
};
var monad = function (value) {
  return {
    map: function (fn) {
      return monad(fn(value));
    },
    unwrap: function () {
      return value;
    },
  };
};
var renderSpeed = function (data) {
  return (select('.speed-value').textContent = String(data.coords.speed || 0));
};
var updateArrow = function (data) {
  return (select('.arrow').style.transform = 'rotate('.concat(data.coords.heading, 'deg)'));
};
navigator.geolocation.watchPosition(
  function (data) {
    return (
      monad(data)
        //
        .map(tap(renderSpeed))
        .map(tap(updateArrow))
    );
  },
  function (err) {
    return console.error(err);
  }
);
