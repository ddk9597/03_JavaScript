const display         = document.querySelector("#display");

const list = document.querySelectorAll("#display > span");

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

        output(); // 화면에 시간 출력
        
        // document.querySelectorAll("#display > span")[2].innerText = count ;

    },10) // 10ms 마다 반복

    e.target.disabled = true ;
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

    // console.log(minute, second, msecond);

    // 아웃풋에 입력
    
    // minute의 값은 화면에 출력된 분이 다를 경우에만 출력해라
    if(list[0].innerText != minute) list[0].innerText = minute;

    // second의 값과 화면에 출력된 초가 다를 경우에만 출력
    if(list[1].innerText != second) list[1].innerText = second;

    list[2].innerText = msecond;



}

/* 한자리 숫자인 경우 앞에 0 붙여서 반환하는 함수 */
function attatchZero(num){
    if(num < 10){ //한자리수인 경우
        return "0" + num;
        
    }
    return "" + num;
}

/* resetBtn 클릭 되었을때 */
resetBtn.addEventListener("click", ()=>{

    // currInterval 제거
    window.clearInterval(curInterval);

    // count, 출력된 시간 모두 0으로 바꾸기
    count=0;
    output();

    // start버튼 활성화
    startBtn.disabled = false; // 비활성화를 안하겠다
});