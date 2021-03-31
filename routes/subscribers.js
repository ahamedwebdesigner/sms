var express = require('express');
var router = express.Router();
var db = require("../DB.js")
var md5 = require('md5');

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




router.get('/create',(req, res, next) =>{
  res.render('subscribersCreate', { title: 'create subscribers',data:{} });
});

router.post('/create',(req, res, next) =>{
  // console.log("========================");
  // console.log(req.body);
  // console.log("========================");

var sql ='INSERT INTO user (name, email, password) VALUES (?,?,?)';
var params =[req.body.name, req.body.email, md5(req.body.password)];

db.run(sql, params,(err, result) =>{
    if (err){
      res.status(400).json({"error": err.message})
      return;
    }

  res.send('user data submited with successefully');

});



  
});
router.post('/edit',(req, res, next) =>{



var sql ='UPDATE user set name = ?, email = ?, password = ? WHERE id = ?';
var params =[req.body.name, req.body.email, md5(req.body.password),req.body.id];

db.run(sql, params,(err, result) =>{
    if (err){
      res.status(400).json({"error": err.message})
      return;
    }

  res.send('user updated successefully with ');

});


  
});



router.get("/username/:nameofuser", (req, res, next) => {
  var sql = "select * from user where name = ?"
  var params = [req.params.nameofuser]

  db.get(sql, params, (err, row) => {
      if (err) {s
        res.send('user dosent exist');
        return;
      }

      res.render('subscriberSingle', { title: 'subscriber details',data:row });    

  // console.log("========================");
  // console.log(row);
  // console.log("========================");

  //     res.send('row exist');
    });
});

router.get("/userId/:ID", (req, res, next) => {
  var sql = "select * from user where id = ?"
  var params = [req.params.ID]

  db.get(sql, params, (err, row) => {
      if (err) {s
        res.send('user dosent exist');
        return;
      }

      res.render('subscriberSingle', { title: 'subscriber details',data:row });    

  // console.log("========================");
  // console.log(row);
  // console.log("========================");

  //     res.send('row exist');
    });
});

router.get("/edit/:ID", (req, res, next) => {
  var sql = "select * from user where id = ?"
  var params = [req.params.ID]

  db.get(sql, params, (err, row) => {
      if (err) {s
        res.send('user dosent exist');
        return;
      }

      res.render('subscribersEdit', { title: 'Edit subscriber details',data:row });    


    });
});

router.get("/delet/:ID", (req, res, next) => {
  var sql =  'DELETE FROM user WHERE id = ?';
  var params = [req.params.ID]

  db.get(sql, params, (err, row) => {
      if (err) {s
        res.send('user dosent exist');
        return;
      }

      res.send('user deleted successefully');


    });
});




module.exports = router;
