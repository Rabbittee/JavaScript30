/**
 * KeyboardEvent/keyCode(Deprecated)
 * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/keyCode
 **/
const $ = (target) => document.querySelectorAll(target);
const keyboards = $("div[data-key]");
//抓取帶有 data-key 的div標籤
window.addEventListener("keydown", function (event) {
  //新增監聽鍵盤按下事件
  keyboards.forEach(function (element) {
    //列舉出帶有 data-key 的div標籤
    if (element.dataset.key === event.code) {
      //如果按下的鍵盤按鍵與列舉出來的dataset.key相符
      element.classList.add("playing"); //node 的 className添加 playing
      const audio = document.querySelector(
        `audio[data-key=${element.dataset.key}]`
      ); //抓取對應key的node
      audio.currentTime = 0; //每次撥放時重置撥放時間
      audio.play(); //撥放音檔
    }
  });
});

window.addEventListener("keyup", function (event) {
  //新增監聽鍵盤按下事件
  keyboards.forEach(function (element) {
    //列舉出帶有 data-key 的div標籤
    element.dataset.key === event.code && element.classList.remove("playing");
    //如果按下的鍵盤按鍵與列舉出來的dataset.key相符，則從node className移除 playing 
  });
});
