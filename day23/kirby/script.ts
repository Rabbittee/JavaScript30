const select = <T extends Element>(key: string) => document.querySelector<T>(key);
const selectAll = <T extends Element>(key: string) => Array.from(document.querySelectorAll<T>(key));

const render = (el: HTMLElement) => (html: string) => (el.innerHTML = html);

const VoiceOption = ({ name, lang }: SpeechSynthesisVoice) =>
  /*html */ `<option value="${name}">${name} (${lang})</option>`;

type Fn<T, R> = (arg: T) => R;

const monad = <T>(value: T) => ({
  map: <R>(fn: Fn<T, R>) => monad(fn(value)),
  unwrap: () => value,
});

const tap =
  <T>(fn: Fn<T, void>) =>
  (arg: T) => (fn(arg), arg);
const map =
  <T, R>(fn: Fn<T, R>) =>
  (list: T[]) =>
    list.map(fn);
const join =
  <T>(sep: string) =>
  (list: T[]) =>
    list.join(sep);
const prop =
  <T extends {}>(key: keyof T) =>
  (obj: T) =>
    obj[key];

type Constructor<T, R> = new (arg: T) => R;
const create =
  <T, R>(constructor: Constructor<T, R>) =>
  (arg: T) =>
    new constructor(arg);

const synth = window.speechSynthesis;

synth.addEventListener('voiceschanged', () =>
  monad(synth.getVoices())
    .map(
      tap((voices) =>
        monad(voices)
          //
          .map(map(VoiceOption))
          .map(join(''))
          .map(render(select<HTMLSelectElement>('[name="voice"]')))
      )
    )
    .map(
      tap((voices) =>
        select<HTMLButtonElement>('#speak')
          //
          .addEventListener('click', () =>
            monad(select<HTMLTextAreaElement>('[name="text"]'))
              .map(prop<{ value: string }>('value'))
              .map(create(SpeechSynthesisUtterance))
              .map(
                tap((msg) =>
                  monad(select<HTMLSelectElement>('[name="voice"]'))
                    .map(prop('value'))
                    .map((value) => voices.find(({ name }) => name === value))
                    .map((voice) => (msg.voice = voice))
                )
              )
              .map(
                tap((msg) =>
                  monad(select<HTMLInputElement>('[name="pitch"]'))
                    .map(prop('value'))
                    .map(Number)
                    .map((pitch) => (msg.pitch = pitch))
                )
              )
              .map(
                tap((msg) =>
                  monad(select<HTMLInputElement>('[name="rate"]'))
                    .map(prop('value'))
                    .map(Number)
                    .map((rate) => (msg.rate = rate))
                )
              )
              .map((msg) => synth.speak(msg))
          )
      )
    )
    .map(
      tap(() =>
        select<HTMLButtonElement>('#stop')
          //
          .addEventListener('click', () => synth.cancel())
      )
    )
);
