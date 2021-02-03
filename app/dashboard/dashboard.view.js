import DashboardHTML from './dashboard.html'

class DashboardView {
  constructor() {
    this.intro = 'Dashboard log'
    this.content = DashboardHTML
  }

  render(container) {
    container.innerHTML = this.content
    this.updateIntro()
  }

  updateIntro() {
    const intro =  document.querySelector('.dashboard__intro')
    const pageTitle = document.createElement('h1')
    pageTitle.classList.add('heading', 'heading--md')
    pageTitle.innerHTML = this.intro
    intro.appendChild(pageTitle)
  }
}

export { DashboardView }
