const express = require('express');
const app = express();
var PORT = 5000;
app.use(express.json());
app.use(express.static('client'))
// app.get('/', (req, res) => {
//   res.end('Hello World')
// })
//POST request
app.post('/form', (req, res) => {
  let string = JSON.stringify(req.body);
  console.log(string);
  res.send(string);
})

//format function

app.listen(PORT, () => {console.log(`listening at port ${PORT}`)});
