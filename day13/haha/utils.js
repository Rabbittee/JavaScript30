const imgs = document.querySelectorAll('img');

const target = new IntersectionObserver(handleTarget, { threshold: 0.4 });
imgs.forEach((img) => target.observe(img));

function handleTarget(entries) {
  const el = entries[0].target;
  const showActive = el.className.includes('active');
  if (!showActive) return el.classList.add('active');
}
