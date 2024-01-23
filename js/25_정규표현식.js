/* 입력받은 이름이 한글 2~5글자 사이가 맞는지 확인 */

const inputName = document.querySelector("#inputName");
const nameResult = document.querySelector("#inputName");

// inputName이 입력 되었을 경우
inputName.addEventListener("keyup", e => {

    // 입력된 값 얻어오기
    const value = e.target.value;

    // console.log(value);

    /* 조건에 맞는 정규 표현식 객체 생성 */
    const regExp = /^[가-힣]{2,5}$/ ; 
    
    /* 
        정규식 객체.test(문자열) :
        - 문자열이 정규식에 일치하면 true
        - 아니면 false
    */

     if(regExp.test(value)){ // 일치하면
        nameResult.textContent = "유효한 이름입니다" ;
        nameResult.style.color = "green" ;

     } else{
        nameResult.textContent = "이름 형식이 유효하지 않습니다.";
        nameResult.style.color = "red";
     }
})