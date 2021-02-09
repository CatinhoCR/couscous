import TictactoeHTML from './tictactoe.html'
import Event from '../helpers/events'
import { createDOMElement } from '../helpers/create-elements'

class TictactoeView {
  constructor() {
    this.content = TictactoeHTML
    this.playEvent = new Event()
    this.rematchEvent = new Event()
    this.squares = []
    this.board = []
    // this.next = ''
    this.status, this.statusPlayer, this.game, this.gameInfo, this.rematchBtn, this.scoreX, this.scoreO
  }

  /**
   * Initial DOM Render from HTML file loaded in constructor
   * Returns a promise bool (@todo so we can do stuff AFTER DOM elements exist)
   */
  async render(container) {
    if (!container || !this.content) {
      return false
    }
    container.innerHTML = this.content
    return true
  }

  /**
   * Runs after HTML is added to DOM
   * Creates, Stores all needed DOM selectors/elements
   * Populates initial content
   * Initializes Game
   * @param {Object} data
   */
  afterRender(data) {
    if (data) {
      this.initGame(data).then(
        this.initPlayClicks()
      )
    }
  }

  async initGame(data) {
    this.game = document.querySelector('.tictactoe__board')
    this.squares = Array.from(document.querySelectorAll('.tictactoe__square'))
    this.board = this.squares.slice()

    this.gameInfo = document.querySelector('.tictactoe__info')
    this.rematchBtn = createDOMElement('button', ['button', 'button--lg', 'm-t-20', 'hidden'], 'Rematch!')
    this.gameInfo.appendChild(this.rematchBtn)

    this.score = document.querySelector('.tictactoe__score')
    this.scoreX = document.querySelector('.tictactoe__score-x')
    this.scoreO = document.querySelector('.tictactoe__score-o')

    const playerCss = ['label', 'label--lg', 'text-red', 'd-inline-block', 'font-bold', 'm-r-5']
    this.statusPlayer = createDOMElement('span', playerCss, data.player)

    const statusCss = ['tictactoe__status', 'heading', 'heading--xs', 'm-b-30', 'text-dark-blue']
    this.status = createDOMElement('h2', statusCss, data.text)

    this.status.prepend(this.statusPlayer)
    this.game.prepend(this.status)
    return true
  }

  initPlayClicks() {
    this.board.forEach(square => {
      square.addEventListener('click', e => {
        const index = parseInt(e.target.dataset.index)
        this.playEvent.trigger(index)
      })
    })
  }

  // Set Status msg on top of board
  updateStatusMsg(data) {
    this.status.innerHTML = data.text
    this.statusPlayer.innerHTML = data.next
    this.status.prepend(this.statusPlayer)
  }

  updateSquare(data) {
    this.board[data.cell].innerHTML = data.currentPlayer
    this.updateStatusMsg(data)
  }

  updateWinner(data) {
    this.updateScore(data.score)
    this.enableRematch()
  }

  updateDraw() {
    this.enableRematch()
  }

  enableRematch() {
    this.rematchBtn.classList.remove('hidden')
    this.rematchBtn.addEventListener('click', () => {
      this.startRematch()
    })
  }

  updateScore(score) {
    this.score.classList.add('updating')
    this.status.classList.add('updating')
    this.scoreX.innerHTML = `- Player X: ${score.X}`
    this.scoreO.innerHTML = `- Player O: ${score.O}`
    setTimeout(() => {
      this.score.classList.remove('updating')
      this.status.classList.remove('updating')
    }, 2000)
  }

  startRematch() {
    this.board.forEach(cell => {
      cell.innerHTML = ''
    })
    this.rematchBtn.classList.add('hidden')
    this.rematchEvent.trigger()
  }
}

export { TictactoeView }
