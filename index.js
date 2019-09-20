/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');
const mongoose = require('mongoose');

const isProduction = process.env.NODE_ENV === 'production';

let app = express();

const port = process.env.PORT || 8080;

app.use('/', api)
app.use(express.json());



app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });