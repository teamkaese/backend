/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');
const api = require("./routes/api");
const mongodb = require("./mongoDB");

let app = express();

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

const uri = "mongodb://localhost:27017/warehouse";

const mongoDB = new mongodb(uri);

app.locals.db = mongoDB;

app.use('/', api)
app.use(express.json());
