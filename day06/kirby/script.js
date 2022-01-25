var endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";
var toJSON = function (res) {
  return res.json();
};
var tap = function (fn) {
  return function (arg) {
    return fn(arg), arg;
  };
};
var filter = function (fn) {
  return function (list) {
    return list.filter(fn);
  };
};
var map = function (fn) {
  return function (list) {
    return list.map(fn);
  };
};
var join = function (sep) {
  return function (list) {
    return list.join(sep);
  };
};
var select = function (query) {
  return document.querySelector(query);
};
var render = function (element) {
  return function (html) {
    return (element.innerHTML = html);
  };
};
var debounce = function (ms, fn) {
  var id = undefined;
  return function (arg) {
    if (id) clearTimeout(id);
    id = setTimeout(function () {
      return fn(arg);
    }, ms);
  };
};
var memo = function (keyFn, fn) {
  var cache = {};
  return function (arg) {
    var key = keyFn(arg);
    if (!(key in cache)) cache[key] = fn(arg);
    return cache[key];
  };
};
var fetchCity = memo(
  JSON.stringify,
  function () {
    return fetch(endpoint).then(toJSON);
  }
  //
);
var searchWith = function (token) {
  return function (target) {
    return RegExp(token, "ig").test(target);
  };
};
function Record(_a) {
  var city = _a.city,
    population = _a.population;
  return /*html */ "\n          <li>\n              <span>"
    .concat(city, "</span>\n              <span>")
    .concat(population, "</span>\n          </li>\n      ")
    .replace(/\n/g, "");
}
select(".search").addEventListener(
  "input",
  debounce(300, function (_a) {
    var target = _a.target;
    if (!(target instanceof HTMLInputElement)) return;
    var search = searchWith(target.value);
    fetchCity()
      .then(
        filter(function (_a) {
          var city = _a.city,
            state = _a.state;
          return search(city) || search(state);
        })
      )
      .then(map(Record))
      .then(join(""))
      .then(render(select(".suggestions")));
  })
);
