type Fn<T, R> = (arg: T) => R;
const tap =
  <T>(fn: Fn<T, any>) =>
  (arg: T) => (fn(arg), arg);

const select = <T extends Element>(query: string) => document.querySelector<T>(query);

const selectAll = <T extends Element>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

function invariant(cond: any, message: string): asserts cond {
  if (cond) return;

  throw new Error(message);
}

// === utils end ===

type StickChangeEvent = CustomEvent<{
  isIntersecting: boolean;
}>;
interface ElementEventMap {
  'stick-change': StickChangeEvent;
}

// Sticky Change Observation
const observer = new IntersectionObserver(
  (entries) =>
    entries.forEach(({ target, isIntersecting }) =>
      target.dispatchEvent(new CustomEvent('stick-change', { detail: { isIntersecting } }))
    ),
  { threshold: 1 }
);

selectAll('nav.sticky')
  .map(tap((el) => observer.observe(el)))
  .map(
    tap((el) =>
      el.addEventListener('stick-change', ({ target, detail }) => {
        invariant(target instanceof HTMLElement, 'target should be HTMLElement');

        // see style detail in style.css
        document.body.classList //
          .toggle('active', !detail.isIntersecting);
      })
    )
  );
