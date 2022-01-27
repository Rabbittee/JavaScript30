# 解題

## Array.prototype.findIndex()

- 範例.  
  尋找陣列中首個質數元素的索引
  以下的範例演示了如何查找一個陣列中首個質數元素的索引，找不到則返回 `-1`。

- 另請參見 find() 方法，它返回陣列中找到的元素的值，而不是其索引。

---

## Array.prototype.splice()

- 從索引 -2 的位置開始，刪除 1 個元素

````js  var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// myFish 為 ["angel", "clown", "sturgeon"]
// removed 為 ["mandarin"]```
````
