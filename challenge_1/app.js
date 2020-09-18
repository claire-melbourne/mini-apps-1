

console.log("here we are together")

function changeValue(id) {
  var square = document.getElementById(id);
  square.innerHTML= "X";
  console.log("clicked");
}
//Row 1/Index 0
document.getElementById("{r:0, c:0}").addEventListener("click", function() {changeValue("{r:0, c:0}")}, false);
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