// 呼叫 Dom
const target = document.querySelectorAll(".controls");

// 監聽事件：改變(聽三組)
// Change method by bubbling event.
target.forEach((element) => {
  element.addEventListener("input", function (e) {
    console.log(e.target);
    const currentName = e.target.name;
    const currentValue = e.target.value;
    const unit = e.target.dataset.sizing || "";
    document.documentElement.style.setProperty(
      `--${currentName}`,
      `${currentValue}` + `${unit}`
    );
  });
});
