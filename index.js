/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');
const mongoose = require('mongoose');
const api = require("./routes/api")

const isProduction = process.env.NODE_ENV === 'production';

let app = express();

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

const uri = "mongodb://localhost:27017/warehouse";

mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true });

app.use('/', api)
app.use(express.json());
