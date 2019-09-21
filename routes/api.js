var express = require('express');
var router = express.Router();

router.get('/api', function(req, res, next) {
  res.send('Server Data');
  console.log("From Client: " + req.body);
});

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

router.put('/api', function(req, res, next){

});

// Get all items
router.get('/api/all', function(req, res, next){
  
});

module.exports = router;