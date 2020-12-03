var express = require('express');
var router = express.Router();

var fs = require('fs');


router.get('/', function(req, res, next) {

    

    var files = fs.readdirSync(__dirname+"/../temp/",()=>{});
    console.log("=================="); 
    console.log(files); 
    console.log("=================="); 

    // files.forEach(file=>console.log(file))
     files.forEach(file=>fs.rename(__dirname+"/../temp/"+file,__dirname+"/../temp/"+file.toUpperCase(),()=>{}))
   

    res.send("welcome to directory module");
   
  });



module.exports = router;