var createError = require('http-errors');
var express = require('express');
const fileUpload = require('express-fileupload');
var path = require('path');
var cookieParser = require('cookie-parser'); //*
var logger = require('morgan'); //*
var formidable = require('formidable');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var empRoute = require('./routes/emp');
var dirmanager = require('./routes/dirmanager');
var imgmanager = require('./routes/imgmanager');

var ajaxFileUpload = require('./routes/ajaxFileUpload');
var subscribers = require('./routes/subscribers');
 


var app = express();





// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//app.use(fileUpload());
//app.use(express.bodyParser({ uploadDir:__dirname + '/images/' }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/emp', empRoute);
app.use('/dir', dirmanager);
app.use('/img', imgmanager);
app.use('/ajax', ajaxFileUpload);
app.use('/subscribers', subscribers);



// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
