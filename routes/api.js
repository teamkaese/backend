var express = require('express');
var router = express.Router();

/* GET api route. */
router.get('/api', function(req, res, next) {
  res.send('Server Data');
  console.log("From Client: " + req.body);
});

router.post('/api', function(req, res, next){
  let articleId = req.article_id;
  res.json({status: "200"});
  console.log("Incoming post request from client");
});

router.put('/api', function(req, res, next){

});

// Get all items
router.get('/api/all', function(req, res, next){
  
});

module.exports = router;