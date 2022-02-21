const $ = (e) => document.querySelector(e);
const seletAll = (e) => document.querySelectorAll(e);
const photos = [
  {
    title: 'forest',
    id: '1418065460487-3e41a6c84dc5',
    type: '',
  },
  {
    title: 'cloud',
    id: '1516166328576-82e16a127024',
    type: 'fos-up',
  },
  {
    title: 'ocean',
    id: '1563362874-4b71f307e6f2',
    type: 'fos-left',
  },
  {
    title: 'night',
    id: '1502481851512-e9e2529bfbf9',
    type: 'fos-right',
  },
];

$('body').innerHTML = photos
  .map((photo) => {
    const url = `url(https://images.unsplash.com/photo-${photo.id}?&w=1920)`;
    return `
  <section style="background-image: ${url}">
    <div class="wrapper">
      <main data-fos="${photo.type}">
        <h2 style="background-image: ${url}"><span>${photo.title}</span></h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque amet nostrum suscipit atque eos beatae unde consequuntur nesciunt sequi? Voluptatibus at dolorem voluptatum reiciendis laborum doloremque qui assumenda nemo pariatur!</p>
      </main>
    </div>
  </section>`;
  })
  .join('');

const threshold = 0.5;
const observer = new IntersectionObserver(sectionHandler, { threshold: threshold });

function sectionHandler(entries) {
  entries.map((entry) => {
    const { intersectionRatio, target } = entry;
    intersectionRatio > threshold
      ? target.classList.add('fos-in')
      : target.classList.remove('fos-in');
  });
}

seletAll('[data-fos]').forEach((target) => {
  const type = target.dataset.fos;
  if (type) target.classList.add(type);
  target.classList.add('fos');
  observer.observe(target);
});
