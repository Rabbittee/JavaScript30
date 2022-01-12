import "./style.css";

const select = (element) => document.querySelector(element);

const changeStyle = (e) => {
  const unit = e.target?.dataset.sizing || "";
  document.documentElement.style.setProperty(
    `--${e.target?.name}`,
    e.target?.value + unit
  );
};

select(".controls").addEventListener("input", changeStyle);
