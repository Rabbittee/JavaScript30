const select = (query: string) => document.querySelector<HTMLElement>(query);

select('.panels').addEventListener('click', ({ target }) => {
  if (!(target instanceof Element)) return;

  target.closest('.panel')?.classList.toggle('open');
});
