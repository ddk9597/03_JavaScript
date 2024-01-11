/* .js파일 내부를 <script> 태그 내부라고 생각하면 됨</script> */
function externalFn(){
    alert("외부 파일에 작성 된 externalFn()함수 호출됨");
}


/* Js맛보기 */
// 버튼 클릭 시 body 태그 내의 글자 색, 배경 색을 변경

const body = document.querySelector("body") /* body 태그 선택 */

/* 실행되면 다크모드로 바꾸는 함수(기능) */
function darkMode(){
    body.style.color = "white"; /* 글자색 흰색으로 변경 */
    body.style.backgroundColor = "black"; /* 배경 색 검정으로 변경 */
} 

/* 실행되면 라이트모드로 바꾸는 함수(기능) */
function lightMode(){
    body.style.color = "black" ;
    body.style.backgroundColor = "white";
}

/* 실행되면 그린모드로 바꾸는 함수(기능) */
function greenMode(){
    body.style.color = "white" ;
    body.style.backgroundColor = "green";
}