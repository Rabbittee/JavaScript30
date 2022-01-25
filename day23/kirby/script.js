var select = function (key) {
  return document.querySelector(key);
};
var selectAll = function (key) {
  return Array.from(document.querySelectorAll(key));
};
var render = function (el) {
  return function (html) {
    return (el.innerHTML = html);
  };
};
var VoiceOption = function (_a) {
  var name = _a.name,
    lang = _a.lang;
  /*html */ return '<option value="'
    .concat(name, '">')
    .concat(name, ' (')
    .concat(lang, ')</option>');
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
var tap = function (fn) {
  return function (arg) {
    return fn(arg), arg;
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
var prop = function (key) {
  return function (obj) {
    return obj[key];
  };
};
var create = function (constructor) {
  return function (arg) {
    return new constructor(arg);
  };
};
var synth = window.speechSynthesis;
synth.addEventListener('voiceschanged', function () {
  return monad(synth.getVoices())
    .map(
      tap(function (voices) {
        return (
          monad(voices)
            //
            .map(map(VoiceOption))
            .map(join(''))
            .map(render(select('[name="voice"]')))
        );
      })
    )
    .map(
      tap(function (voices) {
        return (
          select('#speak')
            //
            .addEventListener('click', function () {
              return monad(select('[name="text"]'))
                .map(prop('value'))
                .map(create(SpeechSynthesisUtterance))
                .map(
                  tap(function (msg) {
                    return monad(select('[name="voice"]'))
                      .map(prop('value'))
                      .map(function (value) {
                        return voices.find(function (_a) {
                          var name = _a.name;
                          return name === value;
                        });
                      })
                      .map(function (voice) {
                        return (msg.voice = voice);
                      });
                  })
                )
                .map(
                  tap(function (msg) {
                    return monad(select('[name="pitch"]'))
                      .map(prop('value'))
                      .map(Number)
                      .map(function (pitch) {
                        return (msg.pitch = pitch);
                      });
                  })
                )
                .map(
                  tap(function (msg) {
                    return monad(select('[name="rate"]'))
                      .map(prop('value'))
                      .map(Number)
                      .map(function (rate) {
                        return (msg.rate = rate);
                      });
                  })
                )
                .map(function (msg) {
                  return synth.speak(msg);
                });
            })
        );
      })
    )
    .map(
      tap(function () {
        return (
          select('#stop')
            //
            .addEventListener('click', function () {
              return synth.cancel();
            })
        );
      })
    );
});
