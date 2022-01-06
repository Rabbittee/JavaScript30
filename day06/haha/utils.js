const endpoint =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const input = document.querySelector("input");

input.addEventListener("focus", clearContent);
input.addEventListener("blur", testInputVal);

function clearContent() {
  this.setAttribute("placeholder", "");
}

function testInputVal() {
  const text = this.value === "" ? "City or State" : this.value;
  this.setAttribute("placeholder", text);
}
