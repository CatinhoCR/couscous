// import { HeaderModel } from './header.model'
import { HeaderView } from './header-navbar.view'

class Header {
  constructor(el) {
    this.container = el
    // this.model = new HeaderModel()
    this.view = new HeaderView()
    this.navItems = [
      {
        label: 'Home',
        url: '#/',
      },
      {
        label: 'Dashboard',
        url: '/#/dashboard',
      },
    ]
    this.initHeaderComponent()
  }

  initHeaderComponent() {
    // this.menuData = await this.model.GetHeaderNav()
    this.setupView()
  }

  setupView() {
    this.view.render(this.container)

  }

  afterSetup() {
    this.view.togglerClick()
  }
}

const header = {
  init() {
    const wrapperEl = document.querySelector('#main-nav')
    if (wrapperEl) {
      const sidebar = new Header(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

export default header
