type Fn<T, R> = (arg: T) => R;

const select = (query: string) => document.querySelector<HTMLElement>(query);

const setProperty = (element: HTMLElement) => (
  property: string,
  value: string
) => element.style.setProperty(`--${property}`, value);

select(".controls").addEventListener("input", ({ target }) => {
  if (!(target instanceof HTMLInputElement)) return;

  setProperty(select("img"))(
    target.name,
    `${target.value}${target.dataset.sizing || ""}`
  );
});
