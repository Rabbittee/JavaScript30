## 解題

---

1. 看不懂這一支 function 想要達到的操作

```js
function handleProgress() {
  const percent = (video.currentTime / video.duration) * 100;
  progressBar.style.flexBasis = `${percent}%`;
}
```

2. 這支 function 也不確定他想達到的操作

```js
function scrub(e) {
  console.log(e);
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = scrubTime;
}
```

3. scrub()  
    最後這段真的是太酷了！  
    平常對 Youtube 覺得稀鬆平常的操作今天一步一步完成，真的好有趣！
   > ～好酷那馬塔塔～就是很有意思～  
   > ～好酷那馬塔塔～簡單又好聽～  
   >  你有看獅子王嗎？  
   > 這是裡面的歌唷～
