const display = document.querySelector("#display");     // 출력될 화면
const list = document.querySelectorAll(".display > div") // 화면 내부 요소 분,초,밀리초

/* 버튼들 가져오기 */
// 시작버튼
const startBtn = document.querySelector("#startBtn") ;
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");

// startBtn clicked -> display ++ every 10ms 
// 1/100sec : count % 100
// 1sec : count / 100 % 60
// 1m : count / 100 / 60 

let count = 0 ;

/* start <-> pause 버튼 반복 및 함수 설정 */

startBtn.addEventListener("click", (e)=> {
    if(e.target.textContent === "PAUSE"){
        e.target.textContent = "START";
        window.clearInterval(curInterval);
        return;
    }

    curInterval = window.setInterval(()=>{
        count ++ ; 
        output();
    },10);

    e.target.textContent = "PAUSE" ;
});

/* 한자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attatchZero(num){
    if(num < 10){ //한자리수인 경우
        return "0" + num;
        
    }
    return "" + num;
}

/* 시계 출력 함수 */

function output(){
    let minute = Math.floor(count / 100 / 60 );
    let second = Math.floor(count / 100 % 60 );
    let mSecond = Math.floor(count % 100 );

    // 0 붙여서 문자열로 변환
    minute = attatchZero(minute);
    second = attatchZero(second);
    mSecond = attatchZero(mSecond);

    // 아웃풋에 입력

    // minute의 값은 화면에 출력된 분이 다를 경우에만 출력해라(매 밀리초마다 연산하지말라)
    if(list[0].innerText != minute) list[0].innerText = minute;
    if(list[1].innerText != second) list[0].innerText = second;
    list[2].innerText = mSecond;

    /* 한 자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
    function attatchZero(num){
        if(num < 10 ){
            return "0"+num;
        }
        return "0"+num ;
    }
}

// restBtn clicked
resetBtn.addEventListener("click", () => {
    
});