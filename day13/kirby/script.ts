const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

const callback = (entries: IntersectionObserverEntry[]) =>
  entries
    .filter((entry) => entry.isIntersecting)
    .forEach((entry) => entry.target.classList.add("active"));

const observer = new IntersectionObserver(callback, {
  rootMargin: "0px",
  threshold: 0.8,
});

selectAll(".slide-in").forEach((el) => observer.observe(el));
