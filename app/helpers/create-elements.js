function createDOMElement(elem, cssClasses = [], txt = '', cssId = '') {
  if(!elem) {
    return
  }
  const element = document.createElement(elem)
  if (cssClasses.length >= 1) {
    addCssClasses(element, cssClasses)
  }
  if (cssId) {
    element.setAttribute('id', cssId)
  }
  if (txt) {
    const text = document.createTextNode(txt)
    element.appendChild(text)
    // element.innerHTML = txt
  }

  return element
}

function addCssClasses(element, cssClasses) {
  if (!element || !cssClasses) {
    return
  }
  if (typeof cssClasses !== 'string') {
    for (let i = 0; i < cssClasses.length; i++) {
      element.classList.add(cssClasses[i])
    }
  } else {
    element.classList.add(cssClasses)
  }
}

export { createDOMElement }
