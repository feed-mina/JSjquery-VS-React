function check(){
    const email = document.querySelector('[name="email]').value;
    if(!/^\S+@+\. \S+/.test(email)){
        alert('이메일 형식이 올바르지 않습니다.');
        return false;
    }

    const password = document.querySelector
        .querySelector('[name="password"]')
        .value;
    if(password.length< 8){
        alert("최소 8자리 이상의 비밀번호를 설정해 주세요");
        return false;
    }

    const passwordConfirm = document
        .querySelector(['name="password_confirm"]'])
        .value;
    if(password != passwordConfirm){
        alert('비밀번호 확인이 일치하지 않습니다.');
        return false;
    }
    return true;
}