import Event from '../helpers/events'

class TictactoeModel {
  constructor() {
    this.xIsNext = true
    this.board = Array(9).fill(null)
    this.finished = false

    // TODO: Remove and replace for score array below
    this.score = {
      x: 0,
      o: 0,
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
  }

  async load() {
    // TODO: Get names from form/prompts
    const data = {
      player: this.xIsNext ? 'X' : 'O',
    }
    return data
  }

  play(cell) {
    if (this.board[cell] || this.finished) {
      return
    }
    const currentPlayer = this.xIsNext ? 'X' : 'O'
    this.board[cell] = currentPlayer

    const winner = this.calculateWinner(this.board)
    const draw = this.calculateDraw()
    this.finished = winner || draw ? true : false

    if (!this.finished) {
      this.updateSquareEvent.trigger({ cell, player: currentPlayer })
      this.xIsNext = !this.xIsNext
    } else {
      this.finishCurrentGame(cell, winner, draw)
    }
    /*
    if (!this.finished) {
      // TODO: view fired event updates turn so fucks status msg when won, as it still changes next turn player when theres no next turn
      this.updateSquareEvent.trigger({ cell, player: currentPlayer })
      this.xIsNext = !this.xIsNext
    } else {
      // TODO: Improve this counter for scores, too tired now
      if (currentPlayer === 'X') {
        this.score.x += 1
      } else {
        this.score.o += 1
      }
      this.winEvent.trigger({ cell, player: currentPlayer, score: this.score })
    }
    */
  }

  finishCurrentGame(cell, winner, draw) {
    if (draw) {
      // Fire draw event and update cell
    } else {
      if (winner === 'X') {
        this.score.x += 1
      } else {
        this.score.o += 1
      }
      this.winEvent.trigger({ cell, player: winner, score: this.score })
    }
  }

  switchPlayer() {
    const currentPlayer = this.xIsNext ? 'X' : 'O'
    return currentPlayer
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
        return squares[a]
      }
    }
    return null
  }

  calculateDraw() {
    const draw = this.board.every(i => i)

    if (draw) {
      this.drawEvent.trigger()
    }

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
