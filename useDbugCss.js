const storageService = {
  retriveKey: () => {
    let key = localStorage.getItem('dbug-active')
    return key == null ? false : JSON.parse(key)
  },
  setActive: () => {
    localStorage.setItem('dbug-active', JSON.stringify(true))
  },
  setDeactive: () => {
    localStorage.setItem('dbug-active', JSON.stringify(false))
  },
}

const initStyles = () => {
  const style = document.createElement('style')
  style.setAttribute('data-style', 'dbug')
  style.textContent = `
        .dbug *:not(path):not(g) {
          color: hsla(210, 100%, 100%, 0.9) !important;
          background: hsla(210, 100%, 50%, 0.5) !important;
          outline: solid 0.25rem hsla(210, 100%, 100%, 0.5) !important;
          box-shadow: none !important;
        }
      `
  document.head.appendChild(style)

  if (storageService.retriveKey()) {
    document.querySelector('body')?.classList.add('dbug')
  }
}

const toggleClassName = (e) => {
  if (e.code == 'KeyI' && e.ctrlKey) {
    const bodyEl = document.querySelector('body')

    if (bodyEl?.classList.contains('dbug')) {
      bodyEl?.classList.remove('dbug')
      storageService.setDeactive()
    } else {
      bodyEl?.classList.add('dbug')
      storageService.setActive()
    }
  }
}

window.addEventListener('keypress', toggleClassName)
document.addEventListener('DOMContentLoaded', initStyles)
