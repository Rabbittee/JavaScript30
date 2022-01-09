// 呼叫 Dom
const input = document.querySelectorAll('.controls input')

// 監聽事件：改變(聽三組)
input.forEach(element => 
    element.addEventListener('input', function () {
        const currentName = element.name
        const currentValue = element.value
        const unit = element.dataset.sizing || ''
        document.documentElement.style.setProperty(`--${currentName}`, `${currentValue}` + `${unit}`)
    })
);