/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');
let api = require('./routes/api');

let app = express();

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.use('/', api)