 
// --routes/auth.js--

router.post('/',passport.authenticate('local'));

// --- appendFile.js ---

const session= require('express-session');
const passport = require('passport');
app.use(session({
    secret:'secret',
    resave:false,
    saveUninitialized:true
}));

app.use(passport.initialize());
app.use(passport.session())
app.use('/auth',authRouter);

// passport.authenticate 함수를 http 라우팅에 연결하면 passport가 자동으로 해당하는 strategy를 사용하는 request handler를 자동 생성
// express-session 과 passport.session()을 사용하면 passport가 로그인 시 유저 정보를 세션에 저장하고 가져오는 동작을 자동으로 수행해줌 

passport.serializeUser((user, callback)=>{
    callback(null, user);
})

passport.deserializeUser((obj, callback)=>{
    callback(null, obj);
})

//session을 이용해 user를 사용할 때에는 serializeUser와 deserializeUser를 설정해야 주어야함
//이는 세션에 user정보를 변환하여 저장하고 가져오는 기능을 제공 ex)회원 id만 세션에 저장하고 사용 시 회원 정보를 디비에서 찾아서 사용
// 세션 사용 시 위 두 함수를 작성하지 않으면 passport 로그인이 동작하지 않음