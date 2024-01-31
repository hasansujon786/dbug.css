import { useEffect } from 'react'

export function useDebugCss() {
  const initStyles = () => {
    const bodyEl = document.querySelector('body')
    const urlParams = new URLSearchParams(window.location.search)

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

    if (urlParams.get('dbug') == 'active') {
      bodyEl?.classList.add('dbug')
    }
  }
  const toggleClassName = (e: KeyboardEvent) => {
    if (e.code == 'KeyI' && e.ctrlKey) {
      const bodyEl = document.querySelector('body')
      const urlParams = new URLSearchParams(window.location.search)

      if (bodyEl?.classList.contains('dbug')) {
        bodyEl?.classList.remove('dbug')
        urlParams.delete('dbug')
      } else {
        bodyEl?.classList.add('dbug')
        urlParams.set('dbug', 'active')
      }
      history.replaceState(null, '', '?' + urlParams.toString())
    }
  }

  useEffect(() => {
    initStyles()
    window.addEventListener('keypress', toggleClassName)
    return () => {
      window.removeEventListener('keypress', toggleClassName)
      document
        .querySelectorAll('style[data-style="dbug"]')
        .forEach((element) => element.remove())
    }
  }, [])
}
