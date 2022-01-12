const inputs = document.querySelectorAll('.controls input')

function handleUpdate() {
    const name = `--${this.name}`
    const value = `${this.value}`
    const unit = this.dataset.sizing || ''
    document.documentElement.style.setProperty(name, value + unit)
}

inputs.forEach((input) => input.addEventListener('input', handleUpdate))