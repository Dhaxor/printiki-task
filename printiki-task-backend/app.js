var createError = require('http-errors');
var express = require('express');
var logger = require('morgan');
var cors = require('cors')
const connectToDB = require('./db');


var usersRouter = require('./routes/users');
var productRouter = require('./routes/api/products');
var app = express();


// connection to database
connectToDB();

//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: false }));


app.use('/users', usersRouter);
app.use('/api', productRouter);
app.use('/api/create/products', productRouter);

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
