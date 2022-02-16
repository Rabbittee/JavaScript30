### Skill
1. string.splice(start, deleteCount, item1, item2, item3...) -> remove or replacing existing element, it'll modify the origin array
 - start: The index at which to start changing the array. (it'll be included)
 - deleteCount(optional): An integer indicating the number of elements in the array to remove from start.

在輸入滿六個數字之前都是從第 0 個 index (因為是從 -7 開始刪，不符條件所以從 0 開始) 開始刪除 -5, -4, -3, -2, -1, 0 個數字
滿六個數字之後，再輸入的數字讓陣列有 7 個數字，就能夠從第 -7 個 index 開始往後刪除 1 個數字，如此就能在陣列已經滿六個數字之後都刪掉最一開始輸入的數字（因為每次都會 push 一個新的數字進來）