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


// -----------------------------------------------------


/* 새 탭에서 열기 */

const openPopup1 = document.querySelector("#openPopup1");
    openPopup1.addEventListener("click", () => {
        window.open("23_스탑와치.html");

        // 동일한 방법 : html에서 a 태그 이용하기
        // <a href = "23_스탑와치.html" target="_blank">스탑와치</a>
    });

    /* 팝업창으로 열기 */

    const openPopup2 = document.querySelector("#openPopup2");
    openPopup2.addEventListener("click", () => {
        window.open("23_스탑와치.html", "_blank", "popup"); // 스탑와치를 비어있는 팝업창에 열어라


    });

    /* 팝업창 + 옵션 */

    const openPopup3 = document.querySelector("#openPopup3");
    openPopup3.addEventListener("click", () => {

        let options = [] ;
        options.push("width=300px");
        options.push("height=400px");

        // 팝업창 뜨우는 위치를 지정(메인 모니터에서만 적용됨)
        options.push("left=200px");
        options.push("top=100px");

        // 배열명.toString() : "요소, 요소, 요소"  
        // -> 배열 내 요소를 ,를 구분자로 한 하나의 문자열로 변환

        window.open("23_스탑와치.html", "_blank", "popup"); // 스탑와치를 비어있는 팝업창에 열어라

    });

    /* 팝업창(자식)이 부모창의 값을 읽고 쓰기 */
    const openPopup4 = document.querySelector("#openPopup4");
    openPopup4.addEventListener("click", ()=>{
        const options = [];

        options.push("width = 500")
        options.push("height = 300")
        options.push("left = 500")
        options.push("top = 100")

        window.open("22_팝업창.html", "_blank", options.toString());
    });