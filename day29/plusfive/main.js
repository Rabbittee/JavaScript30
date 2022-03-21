/*
 * @Author:Claire Li
 * @Date:2022-03-20 15:50:12
 * @LastEditors:Claire Li
 * @LastEditTime:2022-03-20 20:34:44
 * @Description:
 */
var select = function (query) { return document.querySelector(query); };
var selectEvery = function (query) { return document.querySelectorAll(query); };
var timer;
function countdown(secs) {
    display(secs);
    timer = window.setInterval(function () {
        if (secs === 1)
            clearInterval(timer);
        secs--;
        display(secs);
    }, 1000);
}
function display(seconds) {
    var hours = Math.floor(seconds / 3600);
    var remainderSeconds = seconds % 3600;
    var minutes = Math.floor(remainderSeconds / 60);
    remainderSeconds = seconds % 60;
    select('.display__time-left').innerText = "\n    ".concat(hours < 10 ? showTens(hours) : hours, ":").concat(minutes < 10 ? showTens(minutes) : minutes, ":").concat(remainderSeconds < 10 ? showTens(remainderSeconds) : remainderSeconds, "\n  ");
}
function showTens(number) {
    return '0' + number;
}
selectEvery('[data-time]').forEach(function (btn) {
    btn.addEventListener('click', function (e) {
        clearInterval(timer);
        if (e !== null && e.target instanceof HTMLButtonElement) {
            var targetSec = Number(e.target.dataset.time);
            countdown(targetSec);
        }
    });
});
select('#custom').addEventListener('submit', function (e) {
    e.preventDefault();
    clearInterval(timer);
    if (e !== null && e.target[0] instanceof HTMLInputElement) {
        var targetSec = Number(e.target[0].value) * 60;
        countdown(targetSec);
        e.target[0].value = '';
    }
});
