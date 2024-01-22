/* setTimeout(함수, 지연시간)(ms 단위로) */

const btn1 = document.querySelector("#btn1");
btn1.addEventListener("click", () => {
    
    window.setTimeout(()=>{
        console.log("3초 후에 출력된 문자열");
    }, 3000); // 3초 후에 수행

    window.setTimeout(()=>{
        console.log("2초 후에 출력된 문자열");
    }, 2000); // 2초 후에 수행

    window.setTimeout(()=>{
        console.log("1초");
    }, 1000); // 1초 후에 수행
 
    window.console.log("바로출력")
});

/* [window.]setInterval(함수, 지연시간(ms)) */

// btn2 가 클릭 되었을때
const btn2 = document.querySelector("#btn2");
btn2.addEventListener("click", (e) =>{
    window.setInterval(()=>{
        
        const span = document.querySelector("#box2 > span");
        // 이전 내용 + 1 한 숫자를 다시 내용으로 대입하겠다
        span.innerText = Number(span.innerText) + 1
    }, 1000); // 1초마다 수행함

    // 누를수록 중복되어서 빨라지는데 막는 방법
    // -> 클릭된 버튼을 비활성화

    e.target.disabled = true ;

   
});

/* clearInterval(interval)  */
const target3 = document.querySelector("#target3");
const start3 = document.querySelector("#start3");
const stop3 = document.querySelector("#stop3");




// start3 버튼 클릭 시 0.1초마다 target의 내용 1씩 증가

let curInterval ; // 현재 인터벌 저장할 함수

start3.addEventListener("click", (e)=>{

    curInterval = setInterval(()=>{
        target3.innerText = Number(target3.innerText) + 1;
    }, 100); // 100ms(0.1초마다 수행)

    e.target.disabled = true; // 비활성화
});

// 멈춤 버튼 클릭 시
stop3.addEventListener("click", () => {
    // setInterval을 제거한다
    window.clearInterval(curInterval);

    start3.disabled = false; // start3을 비활성화 하지 않는다. 다시 눌러서 재시작할수 있게
});
