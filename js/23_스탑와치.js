const display         = document.querySelector("#display");
const startBtn        = document.querySelector("#startBtn");
const recordBtn       = document.querySelector("#recordBtn");
const resetBtn        = document.querySelector("#resetBtn");
const recordContainer = document.querySelector("#recordContainer");

// startBtn 클릭 시 10ms 마다 display(시간)을 증가

let count = 0; // 1/100초마다 1씩 증가한 시간을 저장할 변수

// 1/100초 : count % 100
// 1    초 : count / 100 % 60
// 1    분 : count / 100 / 60

let curInterval; // 인터벌 저장 변수
startBtn.addEventListener("click", (e)=> {
    curInterval = window.setInterval(()=>{
        // count1 증가
        count++; 
        
        // document.querySelectorAll("#display > span")[2].innerText = count ;

    },10) // 10ms 마다 반복
});

/* 시계 출력 함수 */
function output(){
    let minute = Math.floor (count / 100 / 60);
    let second = Math.floor(count / 100 % 60);
    let msecond = Math.floor(count % 100);

    // 0 붙여서 문자열로 변환해서 반환
    minute = attatchZero(minute);
    second = attatchZero(second);
    msecond = attatchZero(msecond);

    console.log(minute, second, msecond);
}

/* 한자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attatchZero(num){
    if(num < 10){ //한자리수인 경우
        return "0" + num;
        
    }
    return "" + num;
}