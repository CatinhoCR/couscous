import TictactoeHTML from './tictactoe.html'
import Event from '../helpers/events'

class TictactoeView {
  constructor() {
    this.content = TictactoeHTML
    this.playEvent = new Event()
    this.squares
    this.board
    this.next = ''
    this.status
  }

  /**
   * Initial DOM Render from HTML file loaded in constructor
   * Returns a promise bool
   */
  async render(container) {
    if (!container || !this.content) {
      return false
    }
    container.innerHTML = this.content
    return true
  }

  afterRender(data) {
    this.squares = Array.from(document.querySelectorAll('.tictactoe__square'))
    if (data) {
      this.startGame(data.player)
    }
  }

  /**
   *
   */
  async startGame(player) {
    this.status = document.querySelector('.tictactoe__status')
    this.status.innerHTML = `Hey ${player}, how about starting the game?`
    this.initDOMEvents()
  }

  /**
   * Maps any DOM elements needed to trigger actions
   * Runs after Initial HTML is loaded or throws errors
   */
  initDOMEvents() {

    this.board = this.squares.slice()
    this.board.forEach(square => {
      square.addEventListener('click', e => {
        const btn = parseInt(e.target.dataset.index)
        console.log('a')
        this.playEvent.trigger(btn)
      })
    })
  }

  updateTurn(data) {
    this.next = (data.player === 'X') ? 'O' : 'X'
    this.status.innerHTML = `Ok then, it's ${this.next}'s turn now!`
  }

  updateSquare(data) {
    this.board[data.cell].innerHTML = data.player
    this.updateTurn(data)
  }

  // @todo This should send a new event to model to restart for real, etc... will do later.
  // Last Checkpoint
  finishGame() {
    const info = document.querySelector('.tictactoe__info')
    const rematch = document.createElement('button')
    rematch.classList.add('button', 'button--lg', 'm-b-20')
    rematch.innerHTML = 'Rematch !'
    info.appendChild(rematch)
    rematch.addEventListener('click', () => {
      // clean board, remove rematch button, keep score
      this.board.forEach(cell => {
        cell.innerHTML = ''
      })
      this.startGame('X')
    })
  }

  // @todo UpdateWinner, Draw, finish game and restart game improve... tired now
  updateWinner(data) {
    this.status.innerHTML = `Wohoo ${data.player}! won this match!`
    this.board[data.cell].innerHTML = data.player
    this.updateScore(data.score)
    this.finishGame()
  }

  // @todo
  updateDraw(data) {
    console.log(data)
  }

  // @todo
  updateScore(score) {
    const x = document.querySelector('.tictactoe__score-x')
    const o = document.querySelector('.tictactoe__score-o')
    x.innerHTML = `X: ${score.x}`
    o.innerHTML = `O: ${score.o}`
  }
}

export { TictactoeView }
