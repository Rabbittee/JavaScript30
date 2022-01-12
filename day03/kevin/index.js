const setRootStyle = (property, value) => {
  document.documentElement.style.setProperty(property, value);
};

const dealInputValue = (input) => {
  const unit = input.dataset.sizing ?? "";
  setRootStyle(`--${input.name}`, `${input.value}${unit}`);
};

document.querySelectorAll(".control").forEach((input) => {
  dealInputValue(input);
  input.addEventListener("input", () => dealInputValue(input));
});
