/* 계산하기 */
// 버튼 클릭 시 부모 요소의 형제요소 중 input에 적힌 값을 number로 바꿔 더한다
const sum = document.querySelector(".sum");

sum.addEventListener("click", () => {
    const parentDiv = sum.parentElement; //sum 버튼의 부모 요소 선택
    const inputs = parentDiv.querySelectorAll("input[type='number']"); // 형제(이모)중 타입 넘버인 input 요소들
    
    let total = 0; //더하니까 0으로해도 무관

    inputs.forEach(input => {
        total += Number(input.value) 
    });

    alert("계산 결과: " + total);
});






/* 인풋 추가 */
const board = document.querySelector("#board");
const addInput = document.querySelector(".btn1");

addInput.addEventListener("click", ()=>{
    
    const input = document.createElement("input");
    input.type = "number";
    board.append(input);

}); 
/* 인풋 추가 끝 */