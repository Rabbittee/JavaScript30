const imgs = document.querySelectorAll('img');

function handler(entries) {
  const el = entries[0].target;
  if (!el.className.includes('active')) el.classList.add('active');
}

const observer = new IntersectionObserver(handler, { threshold: 0.5 });
imgs.forEach((img) => observer.observe(img));
