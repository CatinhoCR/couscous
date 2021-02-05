import { GamesHubView } from './games-hub.view'

class GamesHubComponent {
  constructor(el) {
    this.container = el
    this.view = new GamesHubView()
    this.initGamesHubComponent()
  }

  initGamesHubComponent() {
    this.setupView()
  }

  setupView() {
    this.view.render(this.container)
  }
}

const gamesHub = {
  init(wrapperEl) {
    // const wrapperEl = document.querySelector('#gamesHub')
    if (wrapperEl) {
      const hub = new GamesHubComponent(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

export default gamesHub