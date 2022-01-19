const cast = [
  {
    role: 'Duke Leto Atreides',
    name: 'Oscar Isaac',
    img: 'dune-poster-03.jpg',
  },
  {
    role: 'Chani',
    name: 'Zendaya',
    img: 'dune-poster-02.jpg',
  },
  {
    role: 'Paul Atreides',
    name: 'Timothée Chalamet',
    img: 'dune-poster-01.jpg',
  },
  {
    role: 'Lady Jessica',
    name: 'Rebecca Ferguson',
    img: 'dune-poster-04.jpg',
  },
  {
    role: 'Duncan Idaho',
    name: 'Jason Momoa',
    img: 'dune-poster-05.jpg',
  },
];

function updatePanel(panel, data) {
  panel.style.backgroundImage = `url('./images/${data.img}')`;
  panel.innerHTML = `
    <div class="cast">
        <h3 class="cast-role">${data.role}</h3>
        <p class="cast-name">${data.name}</p>
        <div class="movie-desc">A mythic and emotionally charged hero's journey, "Dune" tells the story of Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, who must travel to the most dangerous planet in the universe to ensure the future of his family and his people.</div>
    </div>`;
}

const panels = document.querySelectorAll('.panel');
cast.forEach((data, index) => updatePanel(panels[index], data));
