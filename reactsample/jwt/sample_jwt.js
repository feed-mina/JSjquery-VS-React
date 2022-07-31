
// 로그인 로직에 JWT 토큰 생성 및 쿠키 전달
setUserToken = (res, user) =>{
    const token = jwt.sign(user, secret);
    res.cookie('token', token);
}

router.post('/',passport.authenticate('local'),
(req,res,next)=>{
    setUserToken(req,res.user);

    res.redirect('/');
});

//res.cookie함수 사용하여 token을 클라이언트에 쿠키로 전달

//passport-jwt 사용하기 
//passport-jwt 패키지를 이용해 요청된 JWT 토큰의 서명을 확인하고 인증하는 기능을 구현

const JwtStrategy = require('passport-jwt').Strategy;
const cookieExtractor = (req) => {
    const {token} = req.cookies;
    return token;
};

const opts = {
    secretOrKey : secret,
    jwtFromRequest: cookieExtractor,
}

module.exports = new JwtStrategy(opts, (user, done)=>{
    done(null, user);
});

passport.use(jwt);