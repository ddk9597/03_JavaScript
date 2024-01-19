/* 박스 생성하기 버튼을 누를 때 마다 마지막 자식으로 container에 추가하기 */

const createBox = document.querySelector("#createBox");
const container = document.querySelector(".container");

/* 
createBox 버튼 클릭 시 div.box를 생성하여 
container의 마지막 자식으로 추가하기
*/

createBox.addEventListener("click", () => {

    /* 1. div 요소 하나 생성 */
    const box = document.createElement("div");
    console.log(box); // 만들어졌지만 화면에는 안보임 body 태그 바깥에 생성되었기 때문

    /* 만들어진 div 요소에 "box" 클래스 추가 */
    box.classList.add("box"); // div.box 추가됨

    /* 3. container의 마지막 자식으로 div 요소 추가 */
    container.append(box);

    /* 4. input 요소 생성 */
    const input = document.createElement("input");
    input.type = "text";

    /* 5. 생성된 input을 box 의 마지막 자식으로 추가 */
    box.append(input);

});

/* 
    요소.classList : 요소의 클래스 목록
    -> 클래스 존재 여부, 추가, 제거 등을 할 수 있음

    요소.classList -> 요소 목록이 배열 형식으로 반환

    요소.classList.contains("클래스명") -> 클래스가 있으면 true, 없으면 false를 반환

    요소.classList.add("클래스명") -> 클래스 추가

    요소.classList.remove("클래스명") -> 클래스 제거
*/


/* inner HTML로 요소 추가하기 */
const innerHTMLBox = document.querySelector("#innerHTMLBox");

innerHTMLBox.addEventListener("click", () => {

    /* 
    container의 이전 내용에 "<div class='box'></div>" 을 누적 + HTML 해석
    */

    container.innerHTML += "<div class='box'><input type='text'></div>"
    // += 복합 대입 연산자. 이전 값을 덮어씌워라.


    

});
