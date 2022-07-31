## JWT 로그인 구현하기
### 1. 기존 세션으로 구현된 로그인을 비활성화
### 2. 로그인 로직에서 JWT 생성 후 쿠키로 전달
### 3. passport-jwt 패키지로 JWT 로그인 미들에어 작성 및 사용

```javascript
// app.use(session(...)); express-session 비활성화
// app.use(passport.session()); passport.session 기능 비활성화
```
## 회원 비밀전호 찾기 흐름 설명
### 1.임의의 문자열로 비밀번호 초기화
### 2. 초기화된 문자열을 메일로 전달 -> 메일 발송기능 개발 필요
### 3. 초기화 후 첫 로그인 시 비밀번호 변경 요청

## 메일 발송 기능 구현 방법 :  SMTP 서버 이용
### 네이버 구글 등의 메일 서버를 이용하여 무료로 발송 가능 , 메일 발송 및 관리 기능 직접 개발 필요
### Simple Mail Transfer Protocol  : 메일 전송을 위한 규약 
### Nodemailer 패키지를 이용하여 SMTP서버를 통해 메일을 발송 할 수 있음 
### SMTP를 Nodemailer에서 Gmail을 사용하기 위해서는 앱 비밀번호 설정이 필요,   추가 생성된 앱 비밀번호는 다시 확인할수 없으므로 기록 필수 !!
### 구글 계정설정 -> 보안 -> 앱 비밀번호 
```javascript

const nodemailer = require('nodemailer');
const transport = nodemailer
.createTransport({
    service : 'Gmail',
    auth : {
        user: "google account",
        pass : "app password",
    },
});

```

```javascript
const message = {
    from : "login account",
    to : mail address",
    subtitle : "title",
    text : " message"
};

transport.sendMail(message, (err, info)=>{
    if (err){
        console.error('err',err);
        return;
    }
    console.log('ok',info);
})
```


```javascript
```

