import { DashboardView } from './dashboard.view'

class DashboardComponent {
  constructor(el) {
    this.container = el
    this.view = new DashboardView()
    this.initDashboardComponent()
  }

  initDashboardComponent() {
    this.setupView()
  }

  setupView() {
    this.view.render(this.container)
  }
}

const dashboard = {
  init(wrapperEl) {
    // const wrapperEl = document.querySelector('#dashboard')
    if (wrapperEl) {
      const dash = new DashboardComponent(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

export default dashboard