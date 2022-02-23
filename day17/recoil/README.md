# day17 - Sort Without Articles
## 將定冠詞 a、an、the 除外排序字串們

- 排除字串開頭的定冠詞

```js
    const toNewString = (name) => name.replace(/^(a |an |the )/i, '').trim();
```

- 排序定冠詞以外的字串

```js
    const sortedBands = bands.sort((a, b) => (toNewString(a) > toNewString(b) ? 1 : -1));
```

- 合併插入
```js
    list.innerHTML = sortedBands.map((band) => `<li>${band}</li>`).join('');
```