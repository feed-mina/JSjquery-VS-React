router.post(...=> {
    const {email, name, password} = req.body;
    const pwHash = getHash(password);
    const exists = await User.findOne({
        email,
    });
    if(exists){
        throw new Error('이미 가입된 메일입니다');
    }

    await User.create({
        email,
        name,
        password:pwHash,
    });

    res.redirect('/');
});