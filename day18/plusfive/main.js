/*
 * @Author:Claire Li
 * @Date:2022-03-02 22:08:47
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-02 23:00:25
 * @Description:
 */

const selectAll = (query) => document.querySelectorAll(query);
const timeNodes = selectAll('[data-time]');

const seconds = Array.from(timeNodes)
  // get data-time's data and turn it to number then sum it
  .map((timeNode) => {
    const [mins, secs] = timeNode.dataset.time.split(':').map(parseFloat);
    return mins * 60 + secs;
  })
  .reduce((preSecs, curSecs) => preSecs + curSecs);

let leftSecs = seconds;
const hours = Math.floor(leftSecs / 3600);
leftSecs = seconds % 3600;
const mins = Math.floor(leftSecs / 60);
leftSecs = leftSecs % 60;

console.log(hours, mins, leftSecs);
