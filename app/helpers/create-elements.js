function createList(parentCss, items, childCss) {
  // , dataName, dataVal
  const list = document.createElement('ul')
  addCssClasses(list, parentCss)
  // list.setAttribute(dataName, dataVal)

  for (let i = 0; i < items.length; i ++) {
    // TODO: this.createListItem?
    // TODO: append child function?
    list.appendChild(items[i])
  }
}

function createListItem(cssClass) {
  // , dataName, dataVal, content
  const listItem = document.createElement('li')
  addCssClasses(listItem, cssClass)
  return listItem
  // listItem.setAttribute(dataName, dataVal)
  // listItem.appendChild(content)
}

function createButton(cssClass) {
  // , dataName, dataVal, content
  const btn = document.createElement('button')
  // btn.classList.add(cssClass)
  addCssClasses(btn, cssClass)
  // btn.setAttribute(dataName, dataVal)
  // btn.appendChild(content)
  return btn
}

function createAnchor(cssClass, url) {
  const anchorLink = document.createElement('a')
  addCssClasses(anchorLink, cssClass)
  anchorLink.href = url
  return anchorLink
}

function createIcon(cssClass, type, src) {
  const icon = document.createElement(type)
  addCssClasses(icon, cssClass)
  icon.src = src
  return icon
}

function createSpan(cssClass, text) {
  const span = document.createElement('span')
  addCssClasses(span, cssClass)
  span.innerHTML = text
  return span
}

function createDiv(cssClass) {
  const div = document.createElement('div')
  addCssClasses(div, cssClass)
  return div
}

function addCssClasses(element, cssClasses) {
  if (typeof cssClasses !== 'string') {
    for (let i = 0; i < cssClasses.length; i++) {
      element.classList.add(cssClasses[i])
    }
  } else {
    element.classList.add(cssClasses)
  }
}

export { createList, createListItem, createButton, createAnchor, createIcon, createSpan, createDiv }