
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