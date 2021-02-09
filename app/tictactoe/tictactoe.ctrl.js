import { TictactoeModel } from './tictactoe.model'
import { TictactoeView } from './tictactoe.view'

class TictactoeComponent {
  constructor(el) {
    this.container = el
    this.model = new TictactoeModel()
    this.view = new TictactoeView()
    this.init()
  }

  /**
   * Initialize the Controller's Event Listeners on Model/View
   * Loads Model data (dummy)
   * Execute setupView()
   */
  async init() {
    this.handleEventHandlers()
    await this.model.load().then(
      res => {
        if (res) {
          this.setupView(res)
        }
      }
    )
  }

  setupView(data) {
    this.view.render(this.container).then(
      () => {
        this.view.afterRender(data)
      }
    )
  }

  /**
   * Listens to Events fired from Model/View and triggers next step(s)
   * @see Event() instances in Model/View for reference
   */
  handleEventHandlers() {
    this.view.playEvent.addListener(index => {
      if (isNaN(index) || index < 0 || index > 8) {
        return
      }
      this.model.play(index)
    })
    this.view.rematchEvent.addListener(() => {
      this.model.restartGame()
    })

    this.model.updateSquareEvent.addListener(data => {
      this.view.updateSquare(data)
    })
    this.model.winEvent.addListener(data => {
      this.view.updateWinner(data)
    })
    this.model.drawEvent.addListener(() => {
      this.view.updateDraw()
    })
  }
}

const tictactoe = {
  init(wrapperEl) {
    // const wrapperEl = document.querySelector('#tictactoe')
    if (wrapperEl) {
      const dash = new TictactoeComponent(wrapperEl) // eslint-disable-line no-unused-vars
    }
  },
}

export default tictactoe