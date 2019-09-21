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
  db.saveContainer({
    id:'12123',
    productCategory:'Emmentaler',
    position:{groundPos:'A3',level:'3'},
    admissionDate:new Date('December 17, 1995 03:24:00'),
    productStage:'riping'
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