const select = (target) => document.querySelector(target);
const selectAll = (target) => document.querySelectorAll(target);

selectAll('div').forEach((el) => {
  el.addEventListener(
    'click',
    () => {
      console.log(el.className);
    },
    { capture: false }
  );
});

select('button').addEventListener('click', (e) => {
  console.log('click!');
});
