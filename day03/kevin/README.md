# 用 JS 控制 CSS 變數辣!

## CSS

需注意，變數名稱與控制其數值的 input name 需 "完全相同"

1. 在 `:root` 定義欲使用之變數
2. 設定需要變數的 class

## JavaScript

> `document.documentElement.style.setProperty` 設定 css 變數

1. querySelectorAll 抓全部的 input
2. 承 1，forEach 然後設定最初的數值，並監聽該元素的 input 事件來觸發改動變數
