const express = require('express');
const app = express();
var PORT = 5000;
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('client'))
app.get('/form', (req, res) => {
  res.end('Hello World')
})
app.post('/form', (req, res) => {
  let object = req.body;
  formatCSV(object)
  //console.log(object);
  res.send(object);
})

//format function
const formatCSV = (jsonObj) => {
  var object = (JSON.parse(jsonObj.jsonSub));
  console.log(object);
  var headers = findKeys(object);
  var linesArray = setValues(headers, object);
  var fullDoc = (headers.join(',') + '\n' + linesArray.join('\n'))
  //var fullDoc = headerString + '\n' +
  console.log('result of fulldoc \n', fullDoc);
  //var linesArray = setValues(findKeys(object), object);
  //console.log(linesArray);
}


var findKeys = function(object) {
  var columnNames = {};
  var recurse = function(obj) {
    for (var key in obj) {
      if (key === "children") {
        for (var i = 0; i < obj.children.length; i++) {
          findKeys(obj.children[i]);
        }
      } else {
        columnNames[key] = true;
      }
    }
  }
  recurse(object);
  return Object.keys(columnNames);
}

var setValues = function(headers, obj) {
  var linesArray = [];
  var recurse = function(obj) {
    var line = [];
    for (var i = 0; i < headers.length; i++) {
      if (!headers[i]) {
        line.push('NA');
      } else {
      line.push(obj[headers[i]]);
      }
    }
    var lineString = line.join(',');
    linesArray.push(lineString);
    for (var j = 0; j < obj.children.length; j++) {
      recurse(obj.children[j]);
    }
  }
  recurse(obj);
  return linesArray;
}

app.listen(PORT, () => {console.log(`listening at port ${PORT}`)});
