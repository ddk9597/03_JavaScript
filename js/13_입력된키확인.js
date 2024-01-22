// 화면에 존재하는 key 모두 얻어오기
const keys = document.querySelectorAll(".key");

// 특정요소가 아닌
// 문서(화면 전체)에서 키가 눌러지는 것을 감지했을 때
document.addEventListener("keydown", function(e){
    
    // e : 이벤트 객체(이벤트 관련 정보가 모두 담겨있음)
    // e.key : 입력된 키를 나타냄, 대소문자 구분되어짐
    // 문자열.toLowerCase() : 영어를 모두 소문자로 변경
    // 문자열.toUpperCase() : 영어를 모두 대문자로 변경

    // console.log(e.key);

    let idx; // 인덱스 값을 저장할 변수

    switch(e.key.toLowerCase()){ // 입력된 키를 모두 소문자로 바꿔 일치하는 case 실행
        case'q' : idx = 0; break;
        case'w' : idx = 1; break;
        case'e' : idx = 2; break;
        case'r' : idx = 3; break;
        default : return; // 함수 종료
    }

    // idx 번호와 일치하는 keys 배열의 요소의 배경색을 변경

    keys[idx].style.backgroundColor = "blue" ;

});

/* 화면 전체에서 키를 뗀 경우 배경색 흰색으로 */
document.addEventListener("keyup", function(e){
    switch(e.key.toLowerCase()){
        case'q' : idx = 0; break;
        case'w' : idx = 1; break;
        case'e' : idx = 2; break;
        case'r' : idx = 3; break;
        default : return; // 함수 종료
    }

    keys[idx].style.backgroundColor = "white" ;
});

