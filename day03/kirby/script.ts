type Fn<T, R> = (arg: T) => R;

const select = <T extends Element>(query: string) =>
  document.querySelector<T>(query);
const selectAll = <T extends Element>(query: string) =>
  document.querySelectorAll<T>(query);

const setProperty = (element: HTMLElement) => (
  property: string,
  value: string
) => element.style.setProperty(`--${property}`, value);

const update = (target: HTMLInputElement) =>
  setProperty(select("body"))(
    target.name,
    `${target.value}${target.dataset.sizing || ""}`
  );

selectAll<HTMLInputElement>(".controls input").forEach(update);

select(".controls").addEventListener("input", ({ target }) => {
  if (!(target instanceof HTMLInputElement)) return;
  update(target);
});
