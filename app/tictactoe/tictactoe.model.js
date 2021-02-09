import Event from '../helpers/events'

class TictactoeModel {
  constructor() {
    this.xIsNext = true
    this.board = Array(9).fill(null)
    this.currentBoard = []
    this.finished = false

    // TODO: Remove and replace for score array below
    this.score = {
      X: 0,
      O: 0,
    }

    // TODO: Unused, will extend later
    // this.score = [
    //   {
    //     player: 'X',
    //     name: '',
    //     score: 0,
    //     lastMove: null,
    //   },
    //   {
    //     player: '0',
    //     name: '',
    //     score: 0,
    //     lastMove: null,
    //   },
    // ]

    this.updateSquareEvent = new Event()
    this.winEvent = new Event()
    this.drawEvent = new Event()
    this.init()
  }

  init() {
    this.currentBoard = this.board.slice()
  }

  async load() {
    // TODO: Get names from form/prompts
    const data = {
      player: this.xIsNext ? 'X' : 'O',
    }
    return data
  }

  play(cell) {
    if (this.currentBoard[cell] || this.finished) {
      return
    }
    const currentPlayer = this.getCurrentPlayer()
    this.currentBoard[cell] = currentPlayer

    const winner = this.calculateWinner(this.currentBoard)
    const draw = this.calculateDraw()
    this.finished = winner || draw ? true : false
    this.updateSquareEvent.trigger({ cell, player: currentPlayer, finished: this.finished })

    if (winner) {
      this.currentBoardWon(currentPlayer)
    } else {
      this.xIsNext = !this.xIsNext
      if (draw) {
        this.drawEvent.trigger()
      }
    }
  }

  currentBoardWon(currentPlayer) {
    this.score[currentPlayer] += 1
    this.winEvent.trigger({player: currentPlayer, score: this.score})
  }

  restartGame() {
    this.currentBoard = this.board.slice()
    this.finished = false
  }

  getCurrentPlayer() {
    return this.xIsNext ? 'X' : 'O'
  }

  calculateWinner(squares) {
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
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i]
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        // this.updateWinEvent()
        // return squares[a]
        return true
      }
    }
    // return null
    return false
  }

  calculateDraw() {
    const draw = this.currentBoard.every(i => i)

    // if (draw) {
    //   this.drawEvent.trigger()
    // }

    return draw
  }
/*
  async GetTictactoeNav() {
    // const MenuItems = await fetch('./../api/tictactoeNav.json', {
    const MenuItems = await fetch('./../api/nav.json', {
      mode: 'no-cors',
    })
      .then(response => response.json())
      .then(result => result)
      .catch(error => {
        console.log(error) // eslint-disable-line
      })
    return MenuItems
  }

  async GetSubmenuItem(submenu) {
    const SubMenuItems = await fetch('./../api/' + submenu, {
      mode: 'no-cors',
    })
      .then(response => response.json())
      .then(result => result)
      .catch(error => {
        console.log(error) // eslint-disable-line
      })
    return SubMenuItems
  }
  */
  // TODO: Get data as user clicks for light loading in stuff
  // async GetSelectionData() {}
}

export { TictactoeModel }
