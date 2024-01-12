let balance = 10000 ;

const password = "1234";

function withdrawl() {
    const passWord = prompt('비밀번호를 입력하세요');

    if(passWord == null){
        alert("취소");
    }

    else{
        if(passWord == '1234'){
            alert('비밀번호가 일치합니다.') ;
        }

        else{
            alert("비밀번호가 일치하지 않습니다.")
        }
    }
}