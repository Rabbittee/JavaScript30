// 1. select DOM element
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed');

// 2. 透過 Navigator 這個僅能讀取的 api 來取得裝置的資訊 -> navigator.geolocation
// https://developer.mozilla.org/en-US/docs/Web/API/Navigator/geolocation
navigator.geolocation.watchPosition(handleSuccess, handleFailure);

// 3. 呼叫回傳資訊中的方法來取得方位資訊 -> navigator.geolocation.watchPosition()
// https://developer.mozilla.org/en-US/docs/Web/API/Geolocation/watchPosition
const handleSuccess = ({ coords }) => {
  speed.textContent = coords.speed;
  arrow.style.transform = `rotate(${coords.heading}deg)`;
};

const handleFailure = (err) => console.log(err);
