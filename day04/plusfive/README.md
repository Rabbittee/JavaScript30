### 補充 compare function 
```
function compare(a, b) {
    // 如果 result 是負數那 a 就會排在 b 前面
    // 如果 result 是正數 b 就會在 a 前面
    // 如果 result 是 0 位置就不變
    if (a > b) return 1
    if (b > a) return -1

    return 0
  }

```
#### 可以簡化成這樣

ascending:
```
function compare(a, b) {
  return a - b
}
```
descending:
```
function compare(a, b) {
  return b - a
}
```
compare(40, 100)
升序：40 - 100 是負數，所以 40(a) 會排在 100(b) 前面
降序：100 - 40 是正數，所以 100(b) 會排在 40(a) 前面
compare(100, 40)
升序：100 - 40 是正數，所以 40(b) 會排在 100(a) 前面
降序：40 - 100 是負數，所以 100(a) 會排在 40(b) 前面
