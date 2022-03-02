const videos = document.querySelector('ul.videos');
const timeUnit = 60;

const totalLength = Array.from(videos.children)
  .map((video) => {
    const time = video.dataset.time;
    const [minute, second] = time.split(':').map(parseFloat);
    return minute * 60 + second;
  })
  .reduce((acc, value) => acc + value);

function toTimeFormat(length) {
  const hour = Math.floor(length / (timeUnit * timeUnit));
  const minute = Math.floor(length / timeUnit) % timeUnit;
  const second = length % timeUnit;
  return `${hour}:${minute}:${second}`;
}

console.log(toTimeFormat(totalLength));
