/*
 * @Author:Claire Li
 * @Date:2022-02-09 23:41:56
 * @LastEditors:Claire Li
 * @LastEditTime:2022-02-10 10:51:13
 * @Description:
 */
// 選取所有的 checkbox
const checkboxes = document.querySelectorAll('input')

// 設定最後一次被選取到的 input
let lastChecked

function handleCheck (e) {
  // 偵測現在的狀態是不是在兩個被選取到的 input 中間的 flag
  let inBetween = false

  // 確認是不是有按住 shift 以及現在這個 checkbox 是不是正在被 checked 了
  if (e.shiftKey && this.checked) {
    checkboxes.forEach(checkbox => {
      // 如果 checkbox 等於當前選到的，或是等於上一次選到的
      // 當 checkbox 碰到第一個符合條件的 input 時 inBetween = true，然後就開始讓 inBetween 的 checkbox 都 checked，等到又碰到最後一個符合條件的 input 時，inBetween = false，這時就不會再 checked 了
      if (checkbox === e.target || checkbox === lastChecked) {
        inBetween = !inBetween
      }
  
      if (inBetween) {
        checkbox.checked = true
      }
    })
  }

  // 迴圈跑完才把 lastChecked 更新成現在選到的
  lastChecked = e.target
  // this 就是當前被 checked 到的 input
}

// 幫每個 input 綁監聽器
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))

// 情境：選了第一個 input，不會進 if 判斷，但是 lastChecked 會被賦值成第一個 input。然後按住 shift 選了第三個 input，就會進 if 判斷(判斷按住 shift 鍵以及 e.target 正在被 checked)，然後所有的 checkbox 就開始跑迴圈，這時會先符合 checkbox === lastChecked(第一個 input)條件，這時 inBetween = true。接下來跑第二個 input，它不符合 (checkbox === e.target || checkbox === lastChecked) 的條件，但是現在 inBetween 還是一樣是 true，所以第二個 input 也會被 checked。接下來跑第三個 input，他會符合 checkbox === e.target(因為我們是選到第三個 input 才進來這個 if 的，所以現在 e.target 還是第三個 input) 條件，所以 inBetween = false，所以後面的 checkbox 就都不會再被 checked 了