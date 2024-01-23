/* 객체 불러오기 */
const btn = document.querySelector(".newLottery");
const lottery = document.querySelector(".lottery");
const numPad = document.querySelectorAll(".numberPad"); // 배열형태
let checkCount = 0; // 체크카운트 저장용 변수

/* 클릭시 반응 */

// 문서 전체에서 클릭 감지
document.addEventListener("click", e => {

    // toggle checked on : checked class 추가 및 checkCount++
    // toggle checked off : checked class 제거 및 checkCount--

    if (e.target.classList.contains("numberPad")) {
        // checked 클래스를 토글
        e.target.classList.toggle("checked");

        // .checked를 가지고 있는 클래스 의 수를 checkCount에 산입
        checkCount = document.querySelectorAll(".numberPad.checked").length;

        // checkCount가 최대 6개까지만 유지되도록
        if (checkCount > 6) {
            alert("최대 6개까지 선택 가능합니다");

            // 7개 이상일 경우 마지막 클릭에 대한 checked 클래스 제거
            e.target.classList.remove("checked");

            // checkCount를 다시 계산
            checkCount = document.querySelectorAll(".numberPad.checked").length;
        }
        
        // checkCount가 음수가 되지 않도록 보호
        if (checkCount < 0) {
            checkCount = 0;
        }
    }
});

/* 
    로또판 생성
    체크된 넘버패드(수열) 기록(2차원수열)
     - div에 li 형식으로

*/

// 로또판 생성 버튼에 클릭 이벤트 감지
let hopeStorage = []; // 이전 결과 2차원 수열로 저장할 것
btn.addEventListener("click", () => {
    // .checked 된 div의 innerText 수열로 저장 
    const voidHope = Array.from(document.querySelectorAll('.numberPad.checked'), div => div.innerText);
    
    // 수열을 hopeStorage에 추가
    hopeStorage.push(voidHope);

    // .checked 클래스 제거
    document.querySelectorAll('.numberPad.checked').forEach(div => div.classList.remove('checked'));

    // hopeStorage의 수열 div.hope에 li 형식으로 출력
    const hopeDiv = document.querySelector(".hope");
    hopeDiv.innerHTML = ""; // 이전에 생성된 결과 삭제

    hopeStorage.forEach((sequence, index) => {
        const sequenceText = `${index + 1}회차 (${sequence.join(", ")})`;
        const listItem = document.createElement("li");
        listItem.textContent = sequenceText;
        hopeDiv.appendChild(listItem);


    console.log("Saved voidHope:", voidHope);
    console.log("Hope storage:", hopeStorage);
    });

});

/*  */

