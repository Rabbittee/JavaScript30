import './style.css'

const selectAll = <T extends HTMLElement>(query: string) =>
  Array.from(document.querySelectorAll<T>(query));

const select = <T extends HTMLElement>(query: string) => document.querySelector<T>(query);

const list = selectAll('.cool > li');
const nav = select('.top');
const dropdownBackground = select<HTMLElement>('.dropdownBackground')


if (!dropdownBackground || !nav) throw new Error("element is null");

const handleSetProperty = (element: HTMLElement) => (property: string, value: string) => element.style.setProperty(property, value)

const handleHover = (event: MouseEvent) => {
  const target = <HTMLElement>event.target;
  target.classList.add('trigger-enter');
  setTimeout(() => target.classList.contains('trigger-enter') && target.classList.add('trigger-enter-active'), 150)
  dropdownBackground.classList.add('open')

  const dropdown = <HTMLElement>target.querySelector('.dropdown')
  const dropdwonCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect()

  const coords = {
    height: dropdwonCoords.height,
    width: dropdwonCoords.width,
    top: dropdwonCoords.top - navCoords.top,
    left: dropdwonCoords.left - navCoords.left
  }

  handleSetProperty(dropdownBackground)('width', `${coords.width}px`);
  handleSetProperty(dropdownBackground)('height', `${coords.height}px`);
  handleSetProperty(dropdownBackground)('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

const handleLeave = (event: MouseEvent) => {
  const target = <HTMLElement>event.target; 
  target.classList.remove('trigger-enter', 'trigger-enter-active')
  dropdownBackground.classList.remove('open');
}

list.forEach(item => item.addEventListener('mouseenter', handleHover));
list.forEach(item => item.addEventListener('mouseleave', handleLeave));