## Day 5

### title 
點擊面板後針對進場跟離場處理不同的轉場效果。

### skill
1. dom event
2. querySelectorAll() 選擇器的應用
3. classList 的操作
4. transitionend event

### logic 
1. 監聽面板按下的事件，用 classList.toggle 切換 open 不同類別
2. 監聽動畫結束時，再根據 class 裡面是否包含 open 去新增或移除 open-active class

### learn
1. 動畫出現的先後順序
2. classList methods: toggle 判斷元素是否包含類別，有則移除，沒有就新增
3. addEventListener 可以有多個監聽事件，但是必須拆開來運作
4. 複習 dom 元素父子節點之間的關係
5. transitionend event

### reference
1. [事件監聽優化 & e.target](https://kanboo.github.io/2017/12/30/JS-studynotes/)

### fix
1. **transitionend 事件多次執行** : <br>
transitionend 事件執行次數會取決於 transition-property 的設定，為了要解決 transitionend 事件多次執行的問題，可以先判斷 propertyName 。
2. **事件監聽的優化**: <br> 
透過綁定父節點，再藉由判斷 nodeName 為想監聽的子元素，可以優化原本寫法上對於每個子元素綁定額外的監聽事件
3. **改善寫法**: <br>
原先的寫法中因為沒有針對 transitionend 事件執行多次的問題進行處理，導致後續在添加 open-active 這個 class 時，會因為 transitionend property 包含兩個屬性，執行了兩次 transitionend 事件，只能藉由判斷是否存在 open class 來 add 或者 remove open-active 這個 class。經由 fix(1) ，在添加 open-active 這個 class 時，transitionend 事件只會進行一次，即可使用 toggle methods 來處理。
4. **避免使用 this**: <br>.
感謝奶捲提出，讓我思考重構的可能性，針對這題學習到更多知識。