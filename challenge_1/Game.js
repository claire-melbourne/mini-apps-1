//GAME STATE
class Game {
  constructor() {
    this.board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""]
    ]
    this.playerTurn = 'X'
  }

  saveValue(id) {
    id = id.replace('r', '"r"').replace('c', '"c"');
    var coord = JSON.parse(id);
    var rowInd = coord.r;
    var colInd = coord.c;
    if ( this.board[rowInd][colInd] === "") {
      this.board[rowInd][colInd] = this.playerTurn
    } else {
      return;
    }
    this.checkForWin(rowInd, colInd);
    this.playerTurn === 'X' ? this.playerTurn = 'Y' : this.playerTurn = 'X'
    console.log("value saved to board")
  }

  checkForWin(rowInd, colInd) {
    var rowStreak, columnStreak = 0;
    for (var i = 0; i < this.board[rowInd].length; i++) {
      if (this.board[rowInd][i] === this.playerTurn) {
        rowStreak ++;
      }
    }
    for (var j = 0; j < board.length; j++) {
      if (this.board[j][colInd] === this.playerTurn) {
        colStreak ++;
      }
    }
    if (rowStreak === 3 || colStreak === 3 ) {
      alert(`${this.playerTurn} is the winner!!`);
      this.playerTurn = "win"
      return;
    }
    else if(this.board[1][1] === this.playerTurn) {
      if ((this.board[0][0] === this.playerTurn && board[2][2] === this.playerTurn) || (this.board[2][0] === this.playerTurn && this.board[0][2] === this.playerTurn)){
        alert(`${this.playerTurn} is the winner!!`)
        this.playerTurn = "win"
        return;
      }
    } else {
      for (var i = 0; i < this.board.length; i++) {
        for (var j = 0; j < this.board[i].length; j++) {
          if (this.board[i][j] === "") {
            return;
          }
        }
      }
      alert(`It's a tie! Rematch!`);
      clearBoard();
    }
  }
}

export default Game;