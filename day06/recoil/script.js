const url =
  "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

const select = (target) => document.querySelector(target);

//reduce trigger frequency
const debounce = (delay = 0, func) => {
  let timer;
  return (payload) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => func(payload), delay);
  };
};

// highlight keyword by searching
function findKeyword(keyword) {
  const regex = new RegExp(`(${keyword})`, "gi");
  return function (content) {
    return content.replace(regex, "<span class='hl'>$1</span>");
  };
}

//handle side effect of api
async function apiEffect(source) {
  return fetch(source).then((res) => res.json());
}

const filterTourCity = (keyword) => (tours) => {
  const regex = new RegExp(keyword, "gi");
  return tours.filter((tour) => {
    return tour.city.match(regex) || tour.population.match(regex);
  });
};

const highlightKeyword = (keyword) => (tours) => {
  const focusKeyword = findKeyword(keyword);
  return tours.map((tour) => {
    return `
            <li class="options" data-city="${tour.city}">
              <div class="banner">
                <span class="name">
                ${focusKeyword(tour.city)}
                </span>
                <span class="population">
                ${focusKeyword(tour.population)}
                </span>
              </div>
            </li>
        `;
  });
};

const combineItem = (tours) => tours.join("");

const insertTo = (node) => (list) => (node.innerHTML = list);

const searchBar = select("input.search");
const list = select("ul.suggestions");
const showList = () => list.classList.remove("hidden");

const searchTourismCity = debounce(1000, function (queryContent) {
  if (queryContent.trim().length === 0) {
    insertTo(list)("");
    return;
  }

  apiEffect(url)
    .then(filterTourCity(queryContent))
    .then(highlightKeyword(queryContent))
    .then(combineItem)
    .then(insertTo(list))
    .then(showList);
});

list.addEventListener("click", function ({ target }) {
  searchBar.value = target.dataset.city;
  list.classList.add("hidden");
});

searchBar.addEventListener("keyup", function ({ target: { value } }) {
  searchTourismCity(value);
});
