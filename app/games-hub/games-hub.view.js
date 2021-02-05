import GamesHubHTML from './games-hub.html'

class GamesHubView {
  constructor() {
    this.content = GamesHubHTML
  }

  render(container) {
    container.innerHTML = this.content
  }
}

export { GamesHubView }
