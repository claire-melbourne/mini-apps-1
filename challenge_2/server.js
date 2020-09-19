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
  var object = (jsonObj.jsonSub);
  console.log(object);

}
  //iterate over keys
    //add key to new set
    //if key value is an array iterate over array performing iteration over keys on each element
  //var object = JSON.parse(string)
  //console.log(object, "<----new object")

app.listen(PORT, () => {console.log(`listening at port ${PORT}`)});
