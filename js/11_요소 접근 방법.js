/* 클래스 접근 테스트 */
function classTest(){

    // .cls-test 요소 모두 얻어오기
    const divs = document.getElementsByClassName("cls-test");

    console.timeLog.apply(divs);

    // divs 0번재 요소에 배경색 변경

    divs[0].style.backgroundColor = "rgb(11,203,80)";
    divs[1].style.backgroundColor = "rgb(153,111,22)";
    divs[2].style.backgroundColor = "rgb(123,213,81)";

    //위랑 같은 것임
    for(let i = 0 ; i < divs.length ; i++){
        divs[i].innerText = `${i}번째 div 입니다.`;
    }



}