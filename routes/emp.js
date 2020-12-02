var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/', function(req, res, next) {
    // res.send("welcome to employ module");
    res.render('empform', { title: 'Arshiya' });
  });
  

  router.post('/', function(req, res, next) {
    // console.log(req.body);
    var EmpFile = fs.createWriteStream(__dirname+"/../temp/empdata.txt",{flags:'a'});
    EmpFile.write(req.body.empname);
    EmpFile.write('\r\n');

    EmpFile.close();


    res.send("Empdata saved");
  });

  module.exports = router;