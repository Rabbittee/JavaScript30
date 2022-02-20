const $ = (e) => document.querySelector(e);
const seletAll = (e) => document.querySelectorAll(e);
const photos = [
  {
    title: 'forest',
    id: '1418065460487-3e41a6c84dc5',
  },
  {
    title: 'cloud',
    id: '1516166328576-82e16a127024',
  },
  {
    title: 'ocean',
    id: '1563362874-4b71f307e6f2',
  },
  {
    title: 'night',
    id: '1502481851512-e9e2529bfbf9',
  },
];

seletAll('section').forEach((section, i) => {
  const photo = photos[i];
  const url = `url(https://images.unsplash.com/photo-${photo.id}?&w=1920)`;
  const heading = section.querySelector('h2');
  const text = heading.querySelector('span');
  section.style.backgroundImage = url;
  heading.style.backgroundImage = url;
  text.innerHTML = photo.title;
});

const threshold = 0.5;
const observer = new IntersectionObserver(sectionHandler, { threshold: threshold });

function sectionHandler(entries) {
  const { intersectionRatio, target } = entries[0];
  intersectionRatio > threshold
    ? target.classList.add('fos-in')
    : target.classList.remove('fos-in');

  console.log(intersectionRatio);
}

seletAll('[data-fos]').forEach((target) => {
  const type = target.dataset.fos;
  if (type) target.classList.add(type);
  target.classList.add('fos');
  observer.observe(target);
});
