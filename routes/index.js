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


router.get('/rename',(req,res)=>{
  fs.rename(__dirname+"/../temp/hellow.txt",__dirname+"/../temp/hellowworld.txt",(err)=>{
    if (err) throw err;
    console.log('renamed complete');
  });
  res.send("file renamed");
});


router.get('/getfileinfo',(req,res)=>{
  
  fs.stat(__dirname+"/../temp/hellowworld.txt", function (err, stats) {
    if (err) throw err;
    // console.log('stats: ' + JSON.stringify(stats));
    console.log("==================");
    console.log(stats.isFile());
    console.log(stats.isFile());
    console.log("==================");

    res.setHeader('Content-Type', 'application/json');
    res.send( JSON.stringify(stats));
  });


});


module.exports = router;
