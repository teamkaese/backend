/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');
const api = require("./routes/api");
const mongodb = require("./mongoDB");
const bodyParser = require('body-parser')

let app = express();

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

const uri = "mongodb://localhost:27017/warehouse";

const mongoDB = new mongodb(uri);

app.locals.db = mongoDB;

/*
mongoDB.saveContainer({
  id:'12123',
  productCategory:'Emmentaler',
  position:{groundPos:'A3',level:'3'},
  admissionDate:new Date('December 17, 1995 03:24:00'),
  productStage:'riping'
});
*/
//mongoDB.deleteContainer("12123");

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }))


app.use('/', api)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
