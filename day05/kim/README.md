### 解題
---
複習
```c
  flex: 1 0 auto;
```
- Three-value syntax:    
the values must be in the following order:
1. a <number> for `flex-grow`
2. a <number> for `flex-shrink`
3. a valid value for width for 
`flex-basis`
[好文分享](https://ithelp.ithome.com.tw/articles/10208741)
---
第一次使用 
```js
 .panel.open-active > *:first-child { transform: translateY(0); }
```
---
原來如此   
兩種的差異是：參照或直接執行

> **reference**   
We just want to give it reference to the function and say,    
“Hey, when someone clicks me, make sure that you go find this function and run. 
```js
1.
addEventListener('click', toggleOpen))
```
> **Run** this function：   
```js
2.
addEventListener('click', toggleOpen () ))
```
---
將This 改用 Target 解題
```js
function toggleOpen(event) {
    event.target.classList.toggle('open')
}
```