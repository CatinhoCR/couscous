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
   * Initialize Component
   * In theory, would load the initial API fetch's data
   * Initialize the Controller's Event Listeners on Model/View
   * And Execute the setupView() -> render() methods on View to populate HTML
   */
  async init() {
    this.handleEventHandlers()
    // this.isloading true
    await this.model.load().then(
      (res) => {
        if (res) {
          this.setupView(res)
        }
      }
    )
  }

  /**
   * Load View's HTML into DOM and (in theory) after it's done it:
   * 1. Updates view with data fetched from API
   * 2. Assigns event listeners to buttons in view
   * This is done after the initial render, otherwise DOM elements dont yet exist
   * and thus would throw exception error and break app
   */
  setupView(data) {
    this.view.render(this.container).then(
      // Simulated. Assigns DOM Event Listeners and updates data.
      res => {
        if (res) {
          this.view.afterRender(data)
        }
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