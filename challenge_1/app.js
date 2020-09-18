
//EVENT HANDLING
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
    lastClick = "Y";
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

//KEEPING SCORE (use previously declared nextClick value)
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
var saveValue = (id, callback) => {
  //parse id to object
  id = id.replace('r', '"r"').replace('c', '"c"');
  //id = id.replace('c', '"c"');
  var coord = JSON.parse(id);
  //set value at r equal to rowInd
  //set value at c to colInd
  var rowInd = coord.r;
  var colInd = coord.c;
  //set board[rowInd][colInd] to lastClick value
  board[rowInd][colInd] = lastClick;
  callback(rowInd, colInd);
  console.log("value saved to board")
}

var checkForWin = (rowInd, colInd) => {
  //debugger;
  //check row
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
  //loop through array at board[rowInd]
    //check to see if all values equal lastClick
  //check column
  //loop through board
    //check to see if all values at board[i][colInd] equal last clicked
  //check diags
    if(board[1][1] === lastClick) {
      if ((board[0][0] === lastClick && board[2][2] === lastClick) || (board[2][0] === lastClick && board[0][2] === lastClick)){
        alert(`${lastClick} is the winner!!`)
      }
    }
}

//Row 1/Index 0
document.getElementById("{r:0, c:0}").addEventListener("click", () => {changeValue("{r:0, c:0}")}, false);
document.getElementById("{r:0, c:1}").addEventListener("click", function() {changeValue("{r:0, c:1}")}, false);
document.getElementById("{r:0, c:2}").addEventListener("click", function() {changeValue("{r:0, c:2}")}, false);
//Row 2/Index 1
document.getElementById("{r:1, c:0}").addEventListener("click", function() {changeValue("{r:1, c:0}")}, false);
document.getElementById("{r:1, c:1}").addEventListener("click", function() {changeValue("{r:1, c:1}")}, false);
document.getElementById("{r:1, c:2}").addEventListener("click", function() {changeValue("{r:1, c:2}")}, false);
//Row 3/Index 2
document.getElementById("{r:2, c:0}").addEventListener("click", function() {changeValue("{r:2, c:0}")}, false);
document.getElementById("{r:2, c:1}").addEventListener("click", function() {changeValue("{r:2, c:1}")}, false);
document.getElementById("{r:2, c:2}").addEventListener("click", function() {changeValue("{r:2, c:2}")}, false);






