/*
2019 Bremen Germany template for REST Server
*/
let port = 8080;
let express = require('express');
let app = express();

// First get request
app.get('/', function (req, res) {
  res.send('Server is listening!');
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});