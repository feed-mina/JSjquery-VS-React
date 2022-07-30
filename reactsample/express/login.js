function check(){
    const email = document
        .querySelector('[name="email"')
        .value = email

    if(!email){
        alert("이메일을 입력해주세요");
        return false;
    }

    const password = document
        .querySelector('[name="password"]')
        .value
        
    if(!password){
        alert("비밀번호를 입력해주세요.");
        return false;
    }
    return false;
   
}