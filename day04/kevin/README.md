# 陣列方法大亂鬥

## Q1

`Array.filter` 沒有懸念

## Q2

`Array.map` 沒有懸念

## Q3

`Array.sort` 因為是數字排序，所以相減就可以

## Q4

`Array.reduce` 沒有懸念

## Q5

`Array.sort` 沒有懸念

## Q6

PASS

## Q7

`Array.sort` 取每一個陣列元素，用 `split` 來取得 last name，再用 last name 直接排序
排字用以下函式排序 (用字串的 unicode 來比大小)

```javascript
const compare = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};
```

## Q8

`Array.reduce` 沒有懸念
