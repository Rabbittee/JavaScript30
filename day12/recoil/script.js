const select = (target) => document.querySelector(target);

const queue = [];
const previewer = select('ul');
function handleQueue(e) {
  if (queue.length < 5) {
    queue.push(e.key);
  } else {
    queue.shift();
    queue.push(e.key);
  }

  previewer.innerHTML = queue
    .map(
      (key) =>
        `<li class="flex-1 pt-2 bg-slate-600 text-slate-50 rounded-md text-center">${key}</li>`
    )
    .join('');
}

document.body.addEventListener('keyup', handleQueue);
