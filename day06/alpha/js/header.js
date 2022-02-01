const header = document.querySelector('header');
const githubUrl = 'https://github.com/Rabbittee/JavaScript30/tree/main/day06/alpha';

export default function Header() {
  header.innerHTML = `<nav class="bg-white bg-opacity-75 fixed top-0 w-full">
  <ul class="flex justify-between p-4">
    <li><h1 class="text-2xl">alpha's js 30 days</h1></li>
    <li><a class="hover:text-blue-500 text-xl" href="${githubUrl}">Github</a></li>
  </ul>
  </nav>`;
}
