Q: assert { type: "json" }？這個方法好像只能用在 google 的 V8 引擎上面，firefox 無法使用
Q: 為蝦咪 dataset 裡面的 city name 會被切斷？ A: 用 data-* 時要記得用引號括起來
Q: highlight 卡關，待解決

#### 初步想法
1. 用 filter 找到 city or state 中有 includes 輸入的任何字的結果

＊ 注意大小寫
＊ filter 出來的 state 和 city 結果可能會有重複（想到可能用 Set 來做，因為 Set 裡面的資料是不重複的）
＊ 隨著新增或刪減的字去清空 Set 裡面對應的值
＊ 每一次的輸入都清空 Set 裡面並重新置入資料

#### skills
1. array.filter
2. string.includes
3. Set
4. leaflet