const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dayjs = require('dayjs');
const session = require('express-session');
const passport = require('passport'); 
//connect-mogo패키지를 사용해 sessionstore를 생성
const MongoStore = require('connect-mongo');

const indexRouter = require('./routes');
const postsRouter = require('./routes/posts');
const authRouter = require('./routes/auth');

require('./passport')();
const loginRequired = require('./middlewares/login-required');

mongoose.connect('mongodb://localhost:27017/simple-board');

mongoose.connection.on('connected', () => {
  console.log('MongoDB Connected');
});

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.locals.formatDate = (date) => {
  return dayjs(date).format('YYYY-MM-DD HH:mm:ss');
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ 
  secret: 'elice', 
  resave: false, 
  saveUninitialized: true ,

  // 세션 스토어 사용하기
  store: MongoStore.create({
    mongoUrl: 'mongodb://localhost:27017/simple-board',
  
      })
  }));
    //'몽고디비 데이터베이스 주소',

app.use(passport.initialize());
// passport initialize
app.use(passport.session());
// passport session 

app.use('/', indexRouter);
app.use('/posts',loginRequired, postsRouter);
// /posts 경로에 로그인 필수로 설정하기
app.use('/posts', postsRouter);
app.use('/auth', authRouter);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
