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


```javascript
```


```javascript
```

