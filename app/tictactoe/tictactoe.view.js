import TictactoeHTML from './tictactoe.html'
import Event from '../helpers/events'

class TictactoeView {
  constructor() {
    this.content = TictactoeHTML
    this.playEvent = new Event()
    this.squares
    this.next = ''
  }

  async render(container) {
    container.innerHTML = this.content
    this.updateTurn({player: this.next})
  }

  async afterRender() {

  }

  updateTurn(data) {
    this.next = (data.player !== 'X') ? 'X' : 'O'
    const status = document.querySelector('.tictactoe__turn span')
    status.innerHTML = ` ${this.next}! `
  }

  initClickEvents() {
    this.squares = Array.from(document.querySelectorAll('.tictactoe__square'))
    this.squares.forEach(square => {
      square.addEventListener('click', e => {
        const btn = parseInt(e.target.dataset.index)
        this.playEvent.trigger(btn)
      })
    })
  }

  updateSquare(data) {
    this.squares[data.cell].innerHTML = data.player
    this.updateTurn(data)
  }

  updateWinner(data) {
    // TODO: Better handling for status msg... also manage score, rematch.. etc
    const status = document.querySelector('.tictactoe__turn')
    const winner = document.querySelector('.tictactoe__turn span')
    // winner.innerHTML =
    status.innerHTML = `Wohoo ${data.player}! won this match!`
    this.squares[data.cell].innerHTML = data.player
    this.updateScore(data.score)
  }

  updateScore(score) {
    // TODO: Moves turns history tracker
    const x = document.querySelector('.tictactoe__score-x')
    const o = document.querySelector('.tictactoe__score-0')
    x.innerHTML = `X: ${score.x}`
    o.innerHTML = `O: ${score.o}`
  }

  startRematch() {
    // TODO:
  }

  // squareTrigger(btn) {
  // const index = btn.dataset.index
  // if (this.squares[index] != null) {
  //   return
  // }
  // this.squares[index] = btn
  // console.log(this.squares[index])
  // const winner = this.calculateWinner(this.squares)
  // console.log(winner)
  //   btn.innerHTML = this.xIsNext ? 'X' : 'O'
  //   this.xIsNext = !this.xIsNext
  // }
}

export { TictactoeView }
