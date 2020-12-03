var express = require('express');
var router = express.Router();

var fs = require('fs');
var Jimp = require('jimp');


router.get('/', function(req, res, next) {

  Jimp.read(__dirname+"/../images/beauty.jpg", (err, workingImg) => {
    if (err) throw err;

    workingImg
    // .resize(256, 256)
    .resize(300, Jimp.AUTO)
    .write(__dirname+"/../images/beauty-small.jpg"); // resize

  });


    res.send("welcome to image module");
   
  });



module.exports = router;