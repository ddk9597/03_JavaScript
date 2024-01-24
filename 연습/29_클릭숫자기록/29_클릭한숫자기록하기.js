/* 객체 불러오기 */
const btn = document.querySelector("#reset");
const record = document.querySelector("#record");
const numPad = document.querySelectorAll(".numberPad"); // 배열형태로 저장됨 주의!
let checkRecord = [];



document.addEventListener("mousedown", (e) => {
    if (e.target.classList.contains("numPad")) {
        // 클릭한 요소가 "numPad" 클래스를 포함하는 경우
        e.target.classList.toggle("mouseDown"); // mouseDown 클래스를 토글

        // 클릭한 numPad의 innerText를 checkRecord 배열에 기록
        checkRecord.push(e.target.innerText);

        // 수열을 #record에 추가
        document.getElementById("record").innerText = checkRecord.join(', ');

        // 0.1초 후 mouseDown 클래스 제거
        setTimeout(() => {
            e.target.classList.remove("mouseDown");
        }, 100);

        // checkRecord의 index가 10개 초과인 경우 알림 창 띄우기
        if (checkRecord.length > 10) {
        alert("10개 이상 선택할 수 없습니다.");
        // 마지막 클릭한 요소를 제거
        checkRecord.pop();
        // #record 업데이트
        document.getElementById("record").innerText = checkRecord.join(', ');
        }
        
        // checkRecord 배열을 출력하여 확인
        console.log("checkRecord:", checkRecord);
    }
});

document.addEventListener("mouseup", (e) => {
    if (e.target.classList.contains("numPad")) {
        // 클릭한 요소가 "numPad" 클래스를 포함하는 경우
        e.target.classList.toggle("mouseUp"); // mouseUp 클래스를 토글

        // 일정 시간 후 mouseUp 클래스 제거
        setTimeout(() => {
            e.target.classList.remove("mouseUp");
        }, 100);
    }
});

btn.addEventListener("click", () => {
    // 초기화 버튼 클릭 시 checkRecord 배열을 초기화하고 #record의 innerText를 비움
    checkRecord = [];
    record.innerText = '';
});

