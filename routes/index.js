var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  //console.log(__dirname);


  res.render('index', { title: 'Arshiya' });
});




router.get('/createfile',(req,res)=>{

  var hellow = fs.createWriteStream(__dirname+"/../temp/hellow.txt",{flags:'a'}); //1)creates file
  hellow.write("Hi, Mustaq how are your doing Users. \r\n");
  hellow.write("Hi, Arshiya how are your doing Users. \r\n");
  hellow.close();


  res.send("file created");
});



router.get('/readfile',(req,res)=>{
    fs.readFile(__dirname+"/../temp/hellow.txt", 'utf8',(err, data)=> res.send(data) )
});



router.get('/deletfile',(req,res)=>{
  fs.unlink(__dirname+"/../temp/hellow.txt",()=>{});
  res.send("file deleted");
});




module.exports = router;
