import { TictactoeModel } from './tictactoe.model'
import { TictactoeView } from './tictactoe.view'

class TictactoeComponent {
  constructor(el) {
    this.container = el
    this.model = new TictactoeModel()
    this.view = new TictactoeView()
    this.initComponent()
  }

  async initComponent() {
    // This laoder is only a mocked response for now
    this._data = await this.model.load()
    this.handleEventHandlers()
    this.setupView()
  }

  setupView() {
    this.view.render(this.container).then(
      () => {
        // TODO: This is kinda rubberish and need to sim better.. other day
        // this.view.updateTurn(this._data)
        this.view.initClickEvents()
      }
    )
  }

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