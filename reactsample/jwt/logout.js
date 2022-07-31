
router.get('/logout',... {
    req.logout();
    res.redirect('/');
});


// passport는 req.logout함수를 통해 세션의 로그인 정보를 삭제하여 
// 로그아웃 기능을 구현 할 수 있음

function loginRequired(req,res, next){
    if(!req.user){
        res.redirect('/');
        return;
    }
    next();
}
app.use('/posts',loginRequired, postsRouter);

//로그인 확인 미들웨어 -> 로그인을 필수로 설정하고 싶을 경우, 미들웨어를 사용하여 체크할 수 있음.