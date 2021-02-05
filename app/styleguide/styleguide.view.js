import StyleguideHTML from './styleguide.html'

class StyleguideView {
  constructor() {
    this.intro = 'Styleguide Sub Page Container'
    this.content = StyleguideHTML
  }

  render(container) {
    container.innerHTML = this.content
    this.updateIntro()
  }

  updateIntro() {
    const intro =  document.querySelector('.styleguide__intro')
    const pageTitle = document.createElement('h1')
    pageTitle.classList.add('heading', 'heading--md')
    pageTitle.innerHTML = this.intro
    intro.appendChild(pageTitle)
  }
}

export { StyleguideView }
