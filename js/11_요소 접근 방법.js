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
function tagNameTest(){
    
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

/* name으로 요소 접근하기 */
function nameTest(){

    // name 속성 값이 "hobby"인 요소를 모두 얻어와 hobbyList에 저장
    
    const hobbyList = document.getElementsByName("hobby");

    let str = "" ; // 체크된 값 누적
    let count = 0; // 체크된 수 카운트

    for(let i=0 ; i < hobbyList.length ; i ++){       // 순차 접근

        /* checkbox, radio 전용 속성 (.checked) */

        // input 요소.checked -> 요소가 체크되어 있으면 true, 아니면 false
        // input 요소.checked = true -> 해당 요소 체크
        // input 요소.checked = false -> 해당 요소 체크 해제

        // 체크박스의 값과 체크 여부 출력
        console.log(hobbyList[i].value,  hobbyList[i].checked);

        // 체크 여부를 검사해서
        // 체크가 되어 있다면
        // 체크된 요소의 값을 str 변수에 누적
        // + count 변수 값을 1 증가
        
        if(hobbyList[i].checked){
            
            str += hobbyList[i].value + " " ;
            
            count ++;
        }
    }

    // #name-div 요소에 내용으로 결과 출력
    document.getElementById("name-div").innerHTML = `${str}<br><br>선택된 취미 개수 : ${count}`;
}

/* CSS 선택자로 요소 접근하기 */
// 순서 : html -> css -> JS
function cssTest(){

    /* 
        // 요소 1개
        1) document.querySelector("CSS 선택자");
                -> 문서 내에("abc")가 있다면 선택한다
                -> 선택자가 선택한 요소 중 첫 번째 요소를 반환

        // 요소 n개 -> 배열로 출력됨
        2) document.querySelectorAll("CSS 선택자");
                -> 선택한 요소 모두를 배열(NodeList, 유사배열) 형태로 반환
    */


    // target-div 속성 값이 " css-div" 요소에 접근
    const container = document.querySelector('[target-div = "css-div"]');

    // 요소의 테두리를 변경
    container.style.border = "10px solid red";

    // 첫번째 자식 div 선택 방법 1
    // const div1 = document.querySelector('[target-div = "css-div"] > div:first-child')
    // console.log(div1);
    

    // 첫번째 자식 div 선택 방법 2
    // -> querySelector()특징 중 첫번째 요소만 선택하는 특징을 활용
    const div1 = document.querySelector('[target-div = "css-div"] > div');
    console.log(div1);

    div1.innerText = " CSS 선택자로 선택해서 값 변경됨"

    // 두번째 자식 div 선택
    // 첫번째 요소가 아니면 querySelector() 특징 활용 못함
    const div2 = document.querySelector('[target-div = "css-div"] > div:last-child');
    div2.innerText = "첫 번째 요소가 아니면 querySelector() 특징 활용 모단다"

// 모든 자식 div 한번에 선택하기
const divList = document.querySelectorAll('[target-div="css-div"] > div');

console.log(divList);

divList[0].style.fontFamily = "궁서";
divList[1].style.fontSize = "20x";

for(let i = 0 ; i < divList.length ; i ++){// 순차접근
    divList[i].onclick = function(){
        alert(`${i}번째 인덱스 요소입니다`);
    }
}
}



/* 카카오톡 채팅 화면 만들기 */
function readValue(){

    // 채팅이 출력되는 배경
    const bg = document.querySelector("#chatting-bg");

    // 채팅 내용 입력 input
    const input = document.querySelector("#user-input");

    // 입력된 값이 없을 경우
    // 1) 진짜 안적음
    // 2) 공백만 적음

    /* 문자열.trim() : 문자열 좌우 공백을 제거 */
    if(input.value.trim().length == 0){
        alert("채팅 내용을 입력해 주세요");
        input.value = "" ; // 이전 input에 작성된 값 삭제
        input.focus(); // input 칸에 입력 커서 활성화
        return; // 현재 수행중인 함수를 종료 + 호출한 곳으로 돌아감
    }

    // 채팅 출력
    bg.innerHTML += `<p><span>${input.value}</span></p>`;

    // bg.scrollHeight : bg의 스크롤 전체 높이
    // bg.scrollTop : 스크롤 윗부분 위치
    // bg.scrollTop = 값 : 스크롤 윗 부분을 값 위치로 이동한다
    bg.scrollTop = bg.scrollHeight;
    input.value = "" ;
    input.focus() ; 
    
}

/* 
아이디가 user-input인 요소에서
키가 올라오는 동작이 감지되었을 때
올라온 키가 "Enter"키 이면 readValue() 함수를 호출
*/

// 키보드의 동작 3단계 -키 다운, 키프레스, 키 업
// keydown : 키가 눌러졌을 때 (+꾹 누르고 있으면 계속 인식된다)
// keypress : 키가 눌러지고 있을 때 (연속적으로 인식)
// keyup : 눌러지던 키가 떼어졌을 때 (1회만 인식)

document.querySelector("#user-input").addEventListener("keyup", function(e){

    // e : 이벤트 객체(발생한 이벤트 정보를 담고있는 객체)
    // e.key : 입력한 키를 반환 해준다
    // console.log(e.key);

    if(e.key == "Enter"){ // 엔터가 눌러졌을 때
        readValue(); // 채팅창 출력 함수 호출
    }
});
