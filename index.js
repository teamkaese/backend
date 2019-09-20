/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');
const isProduction = process.env.NODE_ENV === 'production';

let app = express();

var api = require('./routes/api');

const port = process.env.PORT || 8080;


app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});

app.use('/', api)