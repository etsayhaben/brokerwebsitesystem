var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("i am working this is  done rly ");
});

module.exports = router;
