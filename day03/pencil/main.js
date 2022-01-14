const spacing = document.querySelector('input[name="spacing"]');
const blur = document.querySelector('input[name="blur"]');
const base = document.querySelector('input[name="base"]');

spacing.addEventListener('input', getValue);
blur.addEventListener('input', getValue);
base.addEventListener('input', getValue);

function getValue({ target }) {
  const sizing = target.dataset.sizing;
  const rootStyle = document.querySelector(':root');
  const nextValue = !!sizing ? `${target.value}${sizing}` : target.value;
  rootStyle.style.setProperty(`--${target.id}`, nextValue);
}
