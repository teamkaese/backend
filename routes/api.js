var express = require('express');
var router = express.Router();

router.get('/api', function(req, res, next) {
  res.json({status: "200"});
  console.log("From Client: " + req.body);
});

// Get one Item by ID
router.get('/api/get/:id', function(req, res, next){
  let db = req.app.locals.db;
  let cb = function (dd) {
    res.send((dd));
  }
  db.findOneContainer(req.params.id, cb)
})

router.post('/api', function(req, res, next){
  let db = req.app.locals.db;
  console.log(req.body);
  req.body.id;
  
  db.saveContainer({
    id: req.body.id, // QRCOde Prodcut
    productCategory: req.body.productCategory, //Art des Produkts Käse
    description: req.body.description,
    storageNumber: req.body.number, // Lagerplatz
    admissionDate: new Date(), // Timestamp
    expirationDay: req.body.expirationDay
  });
  res.json({status: "200"});
});

router.delete('/api/container/:id', function(req, res, next){
  console.log(req.params.id);
  let db = req.app.locals.db;
  db.deleteContainer(req.params.id);
  res.json({status: "204"});
});

router.put('/api', function(req, res, next){

});

// Get all items
router.get('/api/all', function(req, res, next){
  console.log("Inside get /api/all");
  let db = req.app.locals.db;
  let cb = function (dd) {
    res.send((dd));
  }
  db.getAllContainers(cb);
});

module.exports = router;