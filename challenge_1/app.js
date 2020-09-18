  //CHOOSE A SQUARE
console.log("here we are together")
var nextClick = "X";
var lastClick = "";
function changeValue(id) {
  var square = document.getElementById(id);
  if(square.innerHTML === "X" || square.innerHTML === "O") {
    // debugger;
    return;
  } else if (nextClick === "O") {
    // debugger;
    square.innerHTML = "O";
    nextClick = "X";
    lastClick = "O";
  } else {
    // debugger;
    square.innerHTML = "X";
    nextClick = "O";
    lastClick = "X";
  }
  console.log("clicked");
  //debugger;
  saveValue(id, checkForWin);
}
//BOARD
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
  //CLEAR BOARD
var clearBoard = () => {
  board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
  ]
  var squares = document.getElementsByClassName("gridItem");
  for (var i = 0; i < squares.length; i++){
    console.log(squares[i].innerHTML);
    squares[i].innerHTML = "am I your next move?"
  }
};
//KEEPING SCORE (use previously declared nextClick value)
var saveValue = (id, callback) => {
  id = id.replace('r', '"r"').replace('c', '"c"');
  var coord = JSON.parse(id);
  var rowInd = coord.r;
  var colInd = coord.c;
  board[rowInd][colInd] = lastClick;
  callback(rowInd, colInd);
  console.log("value saved to board")
}

var checkForWin = (rowInd, colInd) => {
  var rowStreak = 0;
  var colStreak = 0
  for (var i = 0; i < board[rowInd].length; i++) {
    if (board[rowInd][i] === lastClick) {
      rowStreak ++;
    }
  }
  for (var j = 0; j < board.length; j++) {
    if (board[j][colInd] === lastClick) {
      colStreak ++;
    }
  }
  if (rowStreak === 3 || colStreak === 3 ) {
    alert(`${lastClick} is the winner!!`);
  }
  if(board[1][1] === lastClick) {
    if ((board[0][0] === lastClick && board[2][2] === lastClick) || (board[2][0] === lastClick && board[0][2] === lastClick)){
      alert(`${lastClick} is the winner!!`)
    }
  }
}

//EVENT LISTENERS
//Row 1/Index 0
document.getElementById("{r:0, c:0}").addEventListener("click", () => {changeValue("{r:0, c:0}")}, false);
document.getElementById("{r:0, c:1}").addEventListener("click", () => {changeValue("{r:0, c:1}")}, false);
document.getElementById("{r:0, c:2}").addEventListener("click", () => {changeValue("{r:0, c:2}")}, false);
//Row 2/Index 1
document.getElementById("{r:1, c:0}").addEventListener("click", () => {changeValue("{r:1, c:0}")}, false);
document.getElementById("{r:1, c:1}").addEventListener("click", () => {changeValue("{r:1, c:1}")}, false);
document.getElementById("{r:1, c:2}").addEventListener("click", () => {changeValue("{r:1, c:2}")}, false);
//Row 3/Index 2
document.getElementById("{r:2, c:0}").addEventListener("click", () => {changeValue("{r:2, c:0}")}, false);
document.getElementById("{r:2, c:1}").addEventListener("click", () => {changeValue("{r:2, c:1}")}, false);
document.getElementById("{r:2, c:2}").addEventListener("click", () => {changeValue("{r:2, c:2}")}, false);

//Button
document.getElementById("reset").addEventListener("click", () => {clearBoard()})





