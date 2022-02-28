### 步驟
1. 選取該選的 p 和 word
2. 建立recognizer
3. 用 recognizer 內建的方法去取得音訊
4. 因為不是陣列所以要轉成陣列
5. 然後把陣列轉成字串

### Skill
1. webkitSpeechRecognition: Chrome has supported it since around version 33 but with prefixed interfaces, so you need to include prefixed versions of them, e.g. webkitSpeechRecognition.
2. recognition.start(): 很重要！一開始忘記打想說我到底哪裡打錯
