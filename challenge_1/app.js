
//EVENT HANDLING
console.log("here we are together")
var nextClick = "X";
var lastClick = "";
function changeValue(id) {
  var square = document.getElementById(id);
  saveValue(id);
  if(square.innerHTML === "X" || square.innerHTML === "O") {
    // debugger;
    return;
  } else if (nextClick === "O") {
    // debugger;
    square.innerHTML = "O";
    nextClick = "X";
    var lastClick = "Y";
  } else {
    // debugger;
    square.innerHTML = "X";
    nextClick = "O"
    var lastClick = "X";
  }
  console.log("clicked");
}

//KEEPING SCORE (use previously declared nextClick value)
var board = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]
var saveValue = (id) => {
  //parse id to object
  id = id.replace('r', '"r"').replace('c', '"c"');
  //id = id.replace('c', '"c"');
  var coord = JSON.parse(id);
  //set value at r equal to rowInd
  //set value at c to colInd
  var rowInd = coord.r;
  var colInd = coord.c;
  //set board[rowInd][colInd] to lastClick value
  board[rowInd][colInd] = nextClick;
  console.log("value saved to board")
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






