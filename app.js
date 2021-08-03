const createError = require('http-errors');
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const config = require('./config');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

const app = express();

// enable this if you run behind a proxy (e.g. nginx)
app.set('trust proxy', 1);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Express middlewares
const middlewares = [
  helmet({ contentSecurityPolicy: false }),
  express.static(path.join(__dirname, '/public')),
  express.urlencoded({ extended: true }),
  cookieParser(),
  logger('dev'),
];

app.use(middlewares);

app.use(async (req, res, next) => {
  /** Initial cart count */
  let count = 0;
  res.locals.cartCount = count;

  return next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
