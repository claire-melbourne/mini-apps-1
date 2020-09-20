const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

var PORT = 5000;
app.use(express.json());
app.use(express.urlencoded());
app.use(express.static('client'))
app.get('/form', (req, res) => {
  res.end('Hello World')
})
app.post('/form', (req, res) => {
  var object = (JSON.parse(req.body.jsonSub))
  var csvFormatted = formatCSV(object);
  console.log(csvFormatted);
  fileWriter('bye');
  res.sendFile('samples/csv_report.csv', { root: __dirname }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log('Sent:', 'samples/csv_report.csv')
    }
  })
})

//format function
const formatCSV = (object) => {
  var headers = findKeys(object);
  var linesArray = setValues(headers, object);
  var fullDoc = (headers.join(',') + '\n' + linesArray.join('\n'))
  return fullDoc
}
var csvFile = path.join(__dirname, 'my_csv.csv');
const fileWriter = (content, callback) => {
  fs.writeFile(csvFile, content, (err) => {
    if (err) {
      throw err;
    }
    console.log('file saved');
    callback(csvFile)
  })
}

fileWriter('hello', (file) => {
  console.log(file);
})


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
