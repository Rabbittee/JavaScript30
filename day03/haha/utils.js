const controls = document.querySelectorAll('.controls input')

controls.forEach(el => {
    cssStyle(el.name, el.value)
    el.onchange = () => {
        cssStyle(el.name, el.value)
    }
})

function cssStyle(idName, val) {
    const img = document.querySelector('img')
    img.style.borderStyle = 'solid'
    if (idName === 'spacing') return img.style.borderWidth = `${val}px`
    if (idName === 'blur') return img.style.filter = `blur(${val}px)`
    img.style.borderColor = `${val}`
}