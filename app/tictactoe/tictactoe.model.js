import Event from '../helpers/events'

class TictactoeModel {
  constructor() {
    this.xIsNext = true
    this.board = Array(9).fill(null)
    this.currentBoard = []
    this.finished = false
    this.statusTxt = 'Its Your Turn, play!'

    // TODO: Remove and replace for score array below
    this.score = {
      X: 0,
      O: 0,
    }

    this.updateSquareEvent = new Event()
    this.winEvent = new Event()
    this.drawEvent = new Event()
    this.init()
  }

  init() {
    this.currentBoard = this.board.slice()
  }

  async load() {
    const data = {
      player: this.getPlayer(),
      text: this.statusTxt,
    }
    return data
  }

  getPlayer() {
    return this.xIsNext ? 'X' : 'O'
  }

  play(cell) {
    if (this.currentBoard[cell] || this.finished) {
      return
    }
    const currentPlayer = this.getPlayer()
    this.currentBoard[cell] = currentPlayer

    const winner = this.calculateWinner(this.currentBoard, currentPlayer)
    const draw = this.calculateDraw()
    this.finished = winner || draw ? true : false

    if (!this.finished || draw) {
      this.xIsNext = !this.xIsNext
    }
    this.updateSquareEvent.trigger({
      cell,
      currentPlayer: currentPlayer,
      text: this.statusTxt,
      next: this.getPlayer(),
    })
  }

  currentBoardWon(currentPlayer) {
    this.statusTxt = 'WINS! Earns rematch 1st turn'
    this.score[currentPlayer] += 1
    this.winEvent.trigger({score: this.score})
  }

  currentBoardDraw() {
    this.statusTxt = 'Plays next, its a DRAW!'
    this.drawEvent.trigger()

  }

  restartGame() {
    this.statusTxt = 'Its Your Turn, play!'
    this.currentBoard = this.board.slice()
    this.finished = false
  }

  calculateWinner(squares, currentPlayer) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    const victory = lines.some(l =>
      squares[l[0]]
      && squares[l[0]] === squares[l[1]]
      && squares[l[1]] === squares[l[2]]
    )

    if (victory) {
      this.currentBoardWon(currentPlayer)
    }

    return victory
  }

  calculateDraw() {
    const draw = this.currentBoard.every(i => i)

    if (draw) {
      this.currentBoardDraw()
    }

    return draw
  }
}

export { TictactoeModel }
