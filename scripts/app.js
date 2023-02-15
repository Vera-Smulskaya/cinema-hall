const movies = [
  {
    title: "Twilight",
    image:
      "https://i.pinimg.com/550x/13/59/69/1359696e1122c35769af521a74ed0dcb.jpg",
    description:
      "When Bella Swan moves to a small town in the Pacific Northwest, she falls in love with Edward Cullen, a mysterious classmate who reveals himself to be a 108-year-old vampire.",
    date: "2008-12-05T00:00:00",
    duration: "2 hours",
    director: "Catherine Hardwicke",
  },
  {
    title: "Pride & Prejudice",
    image:
      "https://64.media.tumblr.com/aeeaedd556f7b472480ae6628a60d957/bd2bfb2eb35454d1-d3/s640x960/654dbb8f38eaf287608fb394f3aff7b784d6542f.jpg",
    description:
      "Love develops between Elizabeth Bennet, a young woman of rank with no fortune, and Mr. Darcy, a handsome yet reserved man whose large estate is entailed upon his cousin. ",
    date: "2005",
    duration: "2 hours",
    director: "Joe Wright",
  },
];

function createSorting() {
  const nav = `
    <a class="sort__item" href="${location.origin + location.pathname + '?sort=name'}">Name</a>
    <a class="sort__item" href="${location.origin + location.pathname + '?sort=date'}">Date</a>
  `;

  return createFragmentTemplate(nav);
} 

function createContentTemplate(movie) {
  const article = `<article class="card">
  <header class="card__header" style="background-image: url(${movie.image})">
    <h2 class="card__title">${movie.title}</h2>
    <span class="card__info">${movie.date} - ${movie.duration}</span>
  </header>
  <section class="card__content">
    <p class="card__description">${movie.description}</p>
    <hr>
    <p>${movie.director}</p>
  </section>
</article> `;

return createFragmentTemplate(article);
}

function createFragmentTemplate(str) {
  const template = document.createElement("template");

  template.innerHTML = str;

  return template.content;
}

function appendContent(id, content) {
  const el = document.getElementById(id);

  el.appendChild(content);
}

function init() {
  const fragment = document.createDocumentFragment();

  movies.forEach((movie) => {
    fragment.appendChild(createContentTemplate(movie));
  });

  appendContent("content", fragment);
  appendContent("sort", createSorting());
}

init(movies);
