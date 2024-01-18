/* 클래스 접근 테스트 */
function classTest(){

    /* 
    유사배열 
     - 배열처럼 index, length를 가지고 있으나
     - 배열 전용 기능(메서드)를 제공하지 않음
    */
    

    // .cls-test 요소 모두 얻어오기
    // -> HTMLCollection( == 유사 배열)
    const divs = document.getElementsByClassName("cls-test");

    console.timeLog.apply(divs);

    // divs 0번째 요소에 배경색 변경

    divs[0].style.backgroundColor = "rgb(11,203,80)";
    divs[1].style.backgroundColor = "rgb(153,111,22)";
    divs[2].style.backgroundColor = "rgb(123,213,81)";

    //위랑 같은 것임
    for(let i = 0 ; i < divs.length ; i++){
        divs[i].innerText = `${i}번째 div 입니다.`;
    }

}

/* input에 입력된 숫자를 모두 얻어와 합계 구하기 */
function classTest2(){

    // 클래스가 cls-test2인 요소를 모두 얻어오겠다
    // -> HTML Collection(유사 배열) 형태로 얻어옴
    const inputList = document.getElementsByClassName("cls-test2")

    /* 
    중요 
    - 요소들을 한 번에 얻어오게 되면 배열 형태로 반환된다
    - 요소를 다루고 싶으며 index를 이용해서 배열 요소를 하나씩 꺼내서 다뤄야한다
    */

    // 합계 저장할 변수
    let sum = 0;

    for(let i = 0; i < inputList.length ; i ++){

        // 요소에 작성된 값 얻어오기 -> number 형태로 변환
        const value = Number(inputList[i].value)    ;

        console.log(i, value);

        // 값 누적
        sum += value ;
    }

    alert(`합계 : ${sum}`) ;
    
}

/* 태그명으로 요소 접근하기 */
function nameTest(){
    
    // html 문서에 존재하는 모든 li 태그 요소르 얻어와
    // 배열로 묶어서 반환
    const tagList = document.getElementsByTagName("li") ;

    for(let i = 0 ; i <tagList.length ; i ++){

        // taglis[i].innerText           : 작성된 내용 얻어오기
        // taglis[i].innerText = "abc"   : 내용으로 "abc" 대입하기

        console.log(tagList[i].innerText);

        // 반복 중 현재 선택된 요소의 배경색을
        // 작성된 내용과 똑같은 색으로 변경
        tagList[i].style.backgroundColor = tagList[i].innerText ;
    }
}