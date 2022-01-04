####Programming Flow

1.取得鍵盤對應字母

<ol>
  <li>使用 addListeningEvent 監聽 keydown 鍵盤事件，並回傳物件結果 e</li>
  <li>使用 console.log 取得事件結果 e.keyCode，確認是否成功</li>
</ol>
2.撥放音效 與 區塊框線效果
<ol>
  <li>使用 e.keyCode 對應 data-key，取得對應的 audio 與 div</li>
</ol>
3.先處理音效撥放
<ol>
  <li>使用 .querySelector() ，取得對應 audio 節點</li>
  <li>使用 .play() ，成功播放，但會有 **無法連擊產生音效的問題**</li>
  <li>於 .play() 前，使用 .currentTime = 0 ，強制將音效撥放起始位置，跳至指定秒數(歸0)</li>
</ol>
4.處理區塊框線效果
<ol>
  <li>使用 querySelector 取得對應 data-key 的 div</li>
  <li>使用 .classList.add() 新增原有css檔已存在的 .playing 樣式</li>
  <li>使用 addListeningEvent 監聽 transitionend 轉場特效結束事件</li>
</ol>

####補充

<ol>
  <li>區塊框線效果：若不使用 addListeningEvent 監聽 transitionend 轉場特效結束事件，而是直接使用 .classList.remove() ，就無法正常呈現轉場效果。</li>
  <li>若改為長音效，可藉由調整 css 中.playing 轉場時間改變轉場事件長度</li>
</ol>
