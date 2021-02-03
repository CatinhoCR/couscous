import navbarHtml from './header-navbar.html'

class HeaderView {
  constructor() {
    this.navbarHTML = navbarHtml
  }

  render(container) {
    container.innerHTML = this.navbarHTML
  }

  togglerClick() {
    // Some event trigger here to send to controller, which would fire something in app
    // Like a get, post, or whatever..
  }
}

export { HeaderView }
