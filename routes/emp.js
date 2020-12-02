var express = require('express');
var router = express.Router();


router.get('/welcome', function(req, res, next) {
    res.send("welcome to employ module");
  });
  
  module.exports = router;