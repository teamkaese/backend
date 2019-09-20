var express = require('express');
var router = express.Router();

/* GET api route. */
router.get('/api', function(req, res, next) {
  res.send('Server Data');
  console.log("From Client: " + req.body);
});

module.exports = router;