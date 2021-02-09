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
    if (data.player) {
      this.initGame(data.player).then(
        this.initPlayClicks()
      )
    }
  }

  async initGame(player) {
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
    this.statusPlayer = createDOMElement('span', playerCss, player)

    const statusCss = ['tictactoe__status', 'heading', 'heading--xs', 'm-b-30', 'text-dark-blue']
    this.status = createDOMElement('h2', statusCss, 'click any square to begin playing')

    this.status.prepend(this.statusPlayer)
    this.game.prepend(this.status)
    return true
  }

  /**
   * Maps any DOM elements needed to trigger actions
   */
  initPlayClicks() {
    this.board.forEach(square => {
      square.addEventListener('click', e => {
        const index = parseInt(e.target.dataset.index)
        this.playEvent.trigger(index)
      })
    })
  }

  updateSquare(data) {
    this.board[data.cell].innerHTML = data.player
    if (!data.finished) {
      const next = (data.player === 'X') ? 'O' : 'X'
      this.statusPlayer.innerHTML = next
      this.status.innerHTML = 'its your turn, play!'
      this.status.prepend(this.statusPlayer)
    }
  }

  updateWinner(data) {
    this.status.innerHTML = 'won! Earns 1st turn on rematch'
    this.statusPlayer.innerHTML = data.player
    this.status.prepend(this.statusPlayer)

    this.updateScore(data.score)
    this.updateGameOver()
  }

  updateDraw() {
    this.statusPlayer.innerHTML = ''
    this.status.innerHTML = 'Its a DRAW!'
    this.updateGameOver()
  }

  updateGameOver() {
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
    }, 1000)
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
