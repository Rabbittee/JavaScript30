const inputs = document.querySelectorAll(".controls input");

function updateCssVarible(e) {
    const {
        name,
        value,
        dataset: { sizing = "" },
    } = e.target;

    document.documentElement.style.setProperty(
        `--${name}`,
        `${value}${sizing}`
    );
}

inputs.forEach((input) => {
    input.addEventListener("change", updateCssVarible);
    input.addEventListener('mousemove', updateCssVarible)
});
