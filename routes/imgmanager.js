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


// /img/profile
router.get('/profile', function(req, res, next) {

  //res.send("uplad file to saved");
  res.render('profile');
});

//  img/profile/upload
router.post('/profile/upload', function(req, res, next) {

  console.log("==============");
  console.log(req.files.profilepic.name);
  console.log(req.body);
  console.log("==============");

  let profilepic = req.files.profilepic;
 // let imgFolder= __dirname+"/../images/"+profilepic.name;


  // NOTE: saving file with original name
  // profilepic.mv(imgFolder,(err)=>{
  //   if (err){ return res.status(500).send(err);}

  //   res.send('File uploaded! successefully');
  // });

  let imgFolder= __dirname+"/../images/"+req.body.userName+".jpg";
    profilepic.mv(imgFolder,(err)=>{
    if (err){ return res.status(500).send(err);}

    res.send('File uploaded! successefully');
  });


  res.send("file sent");
});


module.exports = router;