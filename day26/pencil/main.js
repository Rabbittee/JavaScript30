const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

//
function handleEnter(e) {
  e.target.classList.add('trigger-enter');
  setTimeout(() => {
    e.target.classList.contains('trigger-enter') && e.target.classList.add('trigger-enter-active'),
      150;
  });
  // opacity: 1
  background.classList.add('open');

  const dropdown = e.target.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  // 背景區塊的下一個要移動的數值
  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  // 移動背景
  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

// 離開時將 class 移除
function handleLeave(e) {
  e.target.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

// 滑鼠的移入與移出
triggers.forEach((trigger) => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach((trigger) => trigger.addEventListener('mouseleave', handleLeave));
