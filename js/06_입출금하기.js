
// prompt 사용 연습

function test(){

    const passWord = prompt('비밀번호를 입력하세요');

    //확인 -> 입력한 문자열
    //취소 -> null

    if(passWord == null){ //취소
        alert("취소");
    }

    else{ //확인

        //입력한 비밀번호가 1234가 맞는지 확인하는 if 문을 쓰면 된다.

        if(passWord == '1234'){
            alert("비밀번호가 일치합니다.") ;
            }

        else{
            alert("비밀번호가 일치하지 않습니다.")
        }

    }

}