/*
 * @Author:Claire Li
 * @Date:2022-03-08 00:02:35
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-08 00:39:28
 * @Description:
 */
const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
// 由下面的 function 去找到要反白的位置
document.body.appendChild(highlight);

function highlightLink(e) {
  // 拿到每個 a tag 的 smallest rectangle
  const linkCoords = e.target.getBoundingClientRect();
  // console.log(linkCoords)

  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    // 補齊在 scroll 時的 Y 軸與 X 軸的落差
    top: linkCoords.top + window.screenY,
    left: linkCoords.left + window.screenX,
  };

  console.log(coords);

  highlight.style.width = `${coords.width}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach((a) => a.addEventListener('mouseenter', highlightLink));
