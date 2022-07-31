## JWT 로그인 구현하기
### 1. 기존 세션으로 구현된 로그인을 비활성화
### 2. 로그인 로직에서 JWT 생성 후 쿠키로 전달
### 3. passport-jwt 패키지로 JWT 로그인 미들에어 작성 및 사용

```javascript
// app.use(session(...)); express-session 비활성화
// app.use(passport.session()); passport.session 기능 비활성화
```



```javascript
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
```


```javascript
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
```

```javascript
```

```javascript
```

