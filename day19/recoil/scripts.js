const video = document.querySelector('.player');
const canvas = document.querySelector('.photo');
const ctx = canvas.getContext('2d');
const strip = document.querySelector('.strip');
const snap = document.querySelector('.snap');
const container = document.querySelector('.photobooth');

function showError(err) {
  document.body.innerHTML = `
        <img src='https://avatars.githubusercontent.com/u/82199955?v=4' class="rounded-full my-10" width="600px"/>
        <span class="text-red-600 text-5xl">${err.message}</span>  
    `;
}

function paintToCanvas() {
  const width = video.videoWidth,
    height = video.videoHeight;

  canvas.width = width;
  canvas.height = height;

  return setInterval(() => {
    ctx.drawImage(video, 0, 0, width, height);
    let pixels = ctx.getImageData(0, 0, width, height);
    pixels = rgbSplit(pixels);
    ctx.putImageData(pixels, 0, 0);
  }, 16);
}

function getVideo() {
  if (!navigator.mediaDevices) throw new Error('Browser not support use mediaDevices');
  navigator.mediaDevices
    .getUserMedia({ video: true, false: false })
    .then((stream) => {
      video.srcObject = stream;
      video.play();
    })
    .catch(showError);
}

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

function rgbSplit(pixels) {
  for (let i = 0; i < pixels.data.length; i += 4) {
    pixels.data[i - 150] = pixels.data[i + 0]; // RED
    pixels.data[i + 500] = pixels.data[i + 1]; // GREEN
    pixels.data[i - 550] = pixels.data[i + 2]; // Blue
  }
  return pixels;
}

window.addEventListener('DOMContentLoaded', getVideo);
video.addEventListener('canplay', paintToCanvas);
