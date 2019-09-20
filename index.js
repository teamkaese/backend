/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');

const port = process.env.PORT || 8080;

let app = express();

// First get request
app.get('/', function (req, res) {
  res.send('Server is listening!');
});


let http = require('http');

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});