// 12345 출력하기
function check1(){
    let result = "" ;
    for(let i= 1 ; i < 6 ; i ++){
        result += i ;
        console.log(result);
    }
}

// 1~ 10 출력하기
function check2(){
    for(let i = 1 ; i < 11 ; i ++){
        console.log(i);
    }
}

// 입력받은 수 사이의 모든 정수의 합 구하기
function sumFn(){
    const start = Number(document.querySelector("#inputNumber1-1").value);
    const end = Number(document.querySelector("#inputNumber1-2").value);
    let sum = 0;
    const result = document.querySelector("#result1");
    for(let i = start ; i <= end ; i++){
        sum += i
        result.innerText = sum;
    }
    
}

// 시작 부터 종료까지 입력받은 수만큼 증가하는 수열 ul>li로 출력하기
function excuteFn2(){
    const start = Number(document.querySelector("#inputNumber2-1").value);
    const end = Number(document.querySelector("#inputNumber2-2").value);
    const jump = Number(document.querySelector("#inputNumber2-3").value);
    const ul = document.getElementById("result2");
    ul.innerHTML = "" ;

    for( let i = start ; i <= end; i+=jump){
        ul.innerHTML += `<li>${i}</li>` ;
    }

}

// while 문
/* 
끝이 정확하게 정해지지 않은 반복에서 주로 사용
while(조건식){값이 t인 경우 반복수행할 코드}
false가 나올 때 까지 무한 반복됨
*/

function check17(){
    //메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const pork = 5000;

    // 주문 갯수
    let gCount = 0;
    let rCount = 0;
    let pCount = 0;

    // 값을 저장할 변수
    let input;
    //input 값이 null(prompt에서 취소)일때 까지 무한 반복 주문 받음
    while(input !== null){
        input = prompt(" 메뉴 번호를 입력하세요");

        switch(input){
            case '1' : gCount ++ ; break;
            case '2' : rCount ++ ; break;
            case '3' : pCount ++ ; break;
            case 'null' : alrert("주문 완료"); break;
            default : alert("메뉴 번호를 올바르게 입력하세요"); break;
        }
    } 

    alert(`김밥 ${gCount}, 라면 ${rCount},돈가스 ${pCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (pCount * pork)
    alert(`${sum} 원`)

}

