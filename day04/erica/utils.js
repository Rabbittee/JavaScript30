export function render(title, answer) {
    const container = document.querySelector('.container');
    container.innerHTML += `<h3>${title}</h3>`;
    container.innerHTML += `<div><pre>${JSON.stringify(answer, null, 2)}</pre></div>`;
    console.log(title);
    console.table(answer);
}
