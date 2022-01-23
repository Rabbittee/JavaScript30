const selectAll = <T extends Element>(qs: string) => Array.from(document.querySelectorAll<T>(qs));

const rect = ({ width, height, top, left }: DOMRect) => ({
  width,
  height,
  top,
  left,
});

function highlight(it: HTMLElement) {
  it.classList.add('highlight');
  document.body.append(it);

  return (el: HTMLElement) => () =>
    Object.entries(rect(el.getBoundingClientRect()))
      //
      .forEach(([key, value]) => it.style.setProperty(`--${key}`, `${value}px`));
}

const stick = highlight(document.createElement('div'));

selectAll<HTMLAnchorElement>('a').forEach((el) => el.addEventListener('pointerenter', stick(el)));
