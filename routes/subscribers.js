var express = require('express');
var router = express.Router();
var db = require("../DB.js")

/* GET users listing. */
router.get('/', function(req, res, next) {

  var sql = "select * from user"; 
  //var sql = "select id,name from user"; 
  //var sql = "select id,name from user where id=2"; 
  //var sql = "select id,name from user where id!=2"; 

  var params = [];

  // db.all(sql, params, (err, rows) => {
  //     console.log(rows);
  // });


  /*
  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }

    res.json({
        "message":"success",
        "data":rows
    });

  });
*/




  //res.send('working with databases');
  //res.json({"message":"Ok"})





  db.all(sql, params, (err, rows) => {
    if (err) {
      res.status(400).json({"error":err.message});
      return;
    }

    res.render('subscriberslist', { title: 'list of subscribers',data:rows });
  });




});

module.exports = router;
