var express = require('express');
var router = express.Router();
var formidable = require('formidable');
var fs = require('fs');

router.get('/', (req, res, next)=>{
    // res.send("Ajax file duplad called");
    res.render('ajaxfileupload', { title: 'Arshiya' });

});

router.post('/uplad-files', (req, res, next)=>{


    var form = new formidable.IncomingForm();

    form.multiples = true;
    form.uploadDir = __dirname+"/../images";
    form.keepExtensions = true;



form
  .on ('fileBegin', function(name, file){
    //rename the incoming file to the file's name
    file.path = form.uploadDir + "/" + file.name;
  })
  .on('field', function(field, value) {})
  .on('file', function(field, file) {})
  .on('end', function() {});
form.parse(req);
   
   res.send("Ajax file  uoloaded");
    
});


module.exports = router;

/*


// form.on('fileBegin', function (name, file){
    //     file.path = __dirname+"/../images/" + file.name;
    // });

    // form.on('file', function (name, file){
    //     console.log('Uploaded ' + file.name);
    // });

    // form.parse(req);
    form.parse(req, (err, fields, files) => {
        console.log("==============");
        console.log('fields:', fields);
        console.log('files:', files);
        console.log("==============");
      });

    // console.log("==============");
    // console.log(req.files);
    // console.log(req.body);
    // console.log( Object.keys(req.files));
    // console.log("==============");

    */