/*
2019 Bremen Germany template for REST Server
*/
let express = require('express');
const api = require("./routes/api");
const mongodb = require("./mongoDB");
const bodyParser = require('body-parser')
var cors = require('cors');

let app = express();

const port = process.env.PORT || 8080;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}`);
});

const uri = "mongodb://localhost:27017/warehouse";

const mongoDB = new mongodb(uri);

app.locals.db = mongoDB;


mongoDB.saveContainer({
  id:'12123',
  productCategory:'Emmentaler',
  position:{groundPos:'A3',level:'3'},
  admissionDate:new Date('December 17, 1995 03:24:00'),
  productStage:'riping',
  description: 'Descript',
  expirationDate:new Date('December 17, 1997 03:24:00'),
  isEmpty: false
});

mongoDB.saveContainer({
  id:'122123',
  productCategory:'Maasdammer',
  position:{groundPos:'A3',level:'4'},
  admissionDate:new Date('December 17, 1995 03:24:00'),
  productStage:'riping',
  description: 'Descript',
  expirationDate:new Date('December 17, 1998 03:24:00'),
  isEmpty: true
});


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/', api)

var allowedOrigins = ['http://localhost:7000'];

app.use(cors({
  origin: function(origin, callback){    // allow requests with no origin 
    // (like mobile apps or curl requests)
    if(!origin) return callback(null, true);    if(allowedOrigins.indexOf(origin) === -1){
      var msg = 'The CORS policy for this site does not ' +
                'allow access from the specified Origin.';
      return callback(new Error(msg), false);
    }    return callback(null, true);
  }
}));
