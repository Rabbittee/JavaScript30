const inRange = (min: number, max: number) => (value: number) =>
  max > value && value > min;

const select = <T extends Element>(query: string) =>
  document.querySelector<T>(query);

const append = (el: Element) => (child: Element) => el.append(child);

type Fn<T, R> = (arg: T) => R;
function frameUpdate(fn: Fn<void, void>) {
  const update = () => {
    fn();

    requestAnimationFrame(update);
  };

  requestAnimationFrame(update);
}

const play = <T extends HTMLMediaElement>(element: T) =>
  element.play().then(() => element);

const media = (video: HTMLVideoElement) => (stream: MediaStream) => {
  video.srcObject = stream;
  return play(video);
};

type Vec3 = [number, number, number];
type RGBA = [number /* r */, number /* g */, number /* b */, number /* a */];

interface IRange {
  max: number;
  min: number;
}
type State = {
  effect: <T extends Uint8ClampedArray>(src: T, dist: T, state: State) => void;
  rgbOffset: Vec3;
  red: IRange;
  green: IRange;
  blue: IRange;
};

const Effects = {
  Grayscale(src: Uint8ClampedArray, dist: Uint8ClampedArray, _: State) {
    for (let i = 0; i < src.length; i += 4) {
      const value = (src[i + 0] + src[i + 1] + src[i + 2]) / 3;

      dist[i + 0] = value;
      dist[i + 1] = value;
      dist[i + 2] = value;
      dist[i + 3] = src[i + 3];
    }
  },

  RGBSplit(src: Uint8ClampedArray, dist: Uint8ClampedArray, state: State) {
    const [offsetR, offsetG, offsetB] = state.rgbOffset;

    for (let i = 0; i < src.length; i += 4) {
      dist[i + 0 + offsetR * 4] = src[i + 0];
      dist[i + 1 + offsetG * 4] = src[i + 1];
      dist[i + 2 + offsetB * 4] = src[i + 2];
      dist[i + 3] = src[i + 3];
    }
  },

  GreenScreen(src: Uint8ClampedArray, dist: Uint8ClampedArray, state: State) {
    const isRedIn = inRange(state.red.min, state.red.max);
    const isGreenIn = inRange(state.green.min, state.green.max);
    const isBlueIn = inRange(state.blue.min, state.blue.max);

    for (let i = 0; i < src.length; i += 4) {
      dist[i + 0] = src[i + 0];
      dist[i + 1] = src[i + 1];
      dist[i + 2] = src[i + 2];
      dist[i + 3] = src[i + 3];

      if (
        !isRedIn(src[i + 0]) &&
        !isGreenIn(src[i + 1]) &&
        !isBlueIn(src[i + 2])
      ) {
        dist[i + 3] = 0;
      }
    }
  },
};

const renderer = (canvas: HTMLCanvasElement, state: State) => (
  source: HTMLVideoElement
) => {
  const ctx = canvas.getContext("2d");

  const { videoWidth: width, videoHeight: height } = source;
  Object.assign(canvas, { width, height });

  frameUpdate(() => {
    ctx.drawImage(source, 0, 0, width, height);

    const src = ctx.getImageData(0, 0, width, height);

    const dist = ctx.createImageData(src);

    state.effect(src.data, dist.data, state);

    ctx.putImageData(dist, 0, 0);
  });
};

const snapshot = (canvas: HTMLCanvasElement) => () =>
  new Promise<HTMLImageElement>((resolve) =>
    canvas.toBlob((blob) => {
      const image = new Image();
      image.src = URL.createObjectURL(blob);

      image.addEventListener("load", () => {
        URL.revokeObjectURL(image.src);

        resolve(image);
      });
    })
  );

const audio = (audio: HTMLAudioElement) => () => play(audio);

const state: State = {
  effect: Effects.Grayscale,
  rgbOffset: [10, -5, 10],
  red: { min: 0, max: 0 },
  green: { min: 0, max: 0 },
  blue: { min: 0, max: 0 },
};

select(".rgb").addEventListener("input", ({ target }) => {
  if (!(target instanceof HTMLInputElement)) return;

  if (target.name === "rmin") {
    state.red.min = Number(target.value);
  }
  if (target.name === "rmax") {
    state.red.max = Number(target.value);
  }

  if (target.name === "gmin") {
    state.green.min = Number(target.value);
  }
  if (target.name === "gmax") {
    state.green.max = Number(target.value);
  }

  if (target.name === "bmin") {
    state.blue.min = Number(target.value);
  }
  if (target.name === "bmax") {
    state.blue.max = Number(target.value);
  }
});

select("select").addEventListener("change", ({ target }) => {
  if (!(target instanceof HTMLSelectElement)) return;

  if (target.value === "Grayscale") {
    state.effect = Effects.Grayscale;
  }

  if (target.value === "RGBSplit") {
    state.effect = Effects.RGBSplit;
  }

  if (target.value === "GreenScreen") {
    state.effect = Effects.GreenScreen;
  }
});

navigator.mediaDevices
  .getUserMedia({ video: true })
  .then(media(select(".player")))
  .then(renderer(select(".photo"), state));

const take = snapshot(select(".photo"));
select("button").addEventListener("click", () =>
  take()
    .then(append(select(".strip")))
    .then(audio(select(".snap")))
);
