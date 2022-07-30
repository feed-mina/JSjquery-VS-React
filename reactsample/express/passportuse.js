const local = reququire('./strategies/local');
passport.use(local);

//작성한 strategy를 passposrt.use를 이용해 사용하도록 선언
//passport use를 이용해 strategy를 사용하도록 선언한 후 passport.authenticate를 사용해 해당 strategy를 이용해 요청을 처리할 수 있음