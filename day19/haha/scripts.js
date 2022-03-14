const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
let type = 0;
const switchType = (num) => (type = num);

function takePhoto() {
  // played the sound
  snap.currentTime = 0;
  snap.play();

  // take the data out of the canvas
  const data = canvas.toDataURL('image/jpeg');
  const link = document.createElement('a');
  link.href = data;
  link.setAttribute('download', 'handsome');
  link.innerHTML = `<img src="${data}" alt="Handsome Man" />`;
  strip.insertBefore(link, strip.firstChild);
}

function getVideo() {
  navigator.mediaDevices
    .getUserMedia({ video: true, audio: false })
    .then((localMediaStream) => {
      console.log(localMediaStream);
      video.srcObject = localMediaStream;
      video.play();
    })
    .catch((err) => {
      console.error(`OH NO!!!`, err);
    });
}

function paintToCanvas() {
  const width = video.videoWidth;
  const height = video.videoHeight;
  canvas.width = width;
  canvas.height = height;

  // demo
  //   ctx.drawImage(video, 0, 0, width, height);
  //   let pixels = ctx.getImageData(0, 0, width, height);
  //   // console.log(`Area: ${width * height}, Pixels: ${pixels}`);
  //   console.log(`pixel-1 ${pixels.data[0]} ${pixels.data[1]} ${pixels.data[2]} ${pixels.data[3]}`);
  //   console.log(
  //     `pixel-2 ${pixels.data[0 + 4]} ${pixels.data[1 + 4]} ${pixels.data[2 + 4]} ${
  //       pixels.data[3 + 4]
  //     }`
  //   );

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);

    // take the pixels out
    let pixels = ctx.getImageData(0, 0, width, height);
    // console.log(`Area: ${width * height}, Pixels: ${pixels}`);

    // mess with them
    switch (type) {
      case 1:
        pixels = redEffect(pixels);
        break;
      case 2:
        pixels = rgbSplit(pixels);
        break;
      case 3:
        pixels = greenScreen(pixels);
        break;
    }

    // put them back
    ctx.clearRect(0, 0, width, height);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function redEffect(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 200; // RED
    pixels.data[i + 1] = pixels.data[i + 1] - 50; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - canvas.width * 4 * 50] = pixels.data[i + 0]; // RED
    pixels.data[i - canvas.width * 4 * 40] = pixels.data[i + 1]; // GREEN
    pixels.data[i - canvas.width * 4 * 30] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

function greenScreen(pixels) {
  const levels = {};

  document.querySelectorAll('.rgb input').forEach((input) => {
    levels[input.name] = input.value;
  });

  for (i = 0; i < pixels.data.length; i = i + 4) {
    red = pixels.data[i + 0];
    green = pixels.data[i + 1];
    blue = pixels.data[i + 2];
    alpha = pixels.data[i + 3];

    if (
      red >= levels.rmin &&
      green >= levels.gmin &&
      blue >= levels.bmin &&
      red <= levels.rmax &&
      green <= levels.gmax &&
      blue <= levels.bmax
    ) {
      // take it out!
      pixels.data[i + 3] = 0;
    }
  }

  return pixels;
}

getVideo();

video.addEventListener('canplay', paintToCanvas);
