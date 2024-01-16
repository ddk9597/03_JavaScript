// 12345 출력하기

function check1(){
    let result = "" ;
    for( let num = 1 ; num <= 5 ; num ++){
        result += num ;
        console.log("result :", result); // result 값을 선언하여 결과 값 저장. 여기에 누적 적용
    }
}

// 1~ 10 출력하기

function check2(){
    for( let num = 1 ; num <= 10 ; num ++){
        console.log("num : " , num);
    }
}

// 1 ~ 20 1씩 증가 출력
function check3(){
    for( let num = 1 ; num < 21 ; num ++){
        console.log(num); //결과 저장 값 선언 x, 주어진 조건까지 연산하고 그 결과 덮어씀
    }
}

// 5 ~ 15 1씩 증가하며 출력
function check4(){
    for(let num = 5 ; num < 16 ; num ++){
        console.log(num);
    }
}

//1 ~ 30 2씩 증가하며 출력
function check5(){
    for(let num = 1 ; num < 31 ; num += 2){ // += : 복합연산자. 값을 더하고 적용시킨다
        console.log(num);
    }
}

// 1~ 10 모든 정수의 합

let sum = 0; //합계를 저장하기 위한 변수
function check6(){
    for(let num = 1; num < 11 ; num ++){
        
        sum += num ;
        console.log("sum : ", sum);
    }
}

//입력 받은 범위 내 모든 정수의 합

function sumFn(){
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);
    const result = document.getElementById("result1");
    let sum = 0; // 변하는 값이므로 const로 선언 x
    for( let point = start ; point <= end ; point ++){
        sum += point ;
        
        
    }
    result.innerText = sum ;
}

// 입력받은 범위 내에서 증감식 만큼 증가하는 모든 정수 출력하기
function excuteFn2(){
    const start = Number(document.getElementById("inputNumber2-1").value);
    const end = Number(document.getElementById("inputNumber2-2").value);
    const jump = Number(document.getElementById("inputNumber2-3").value);
    const ul = document.getElementById("result2");
    ul.innerHTML = "" ;

    // start ~ end. jump씩 누적됨
    for(let num = start ; num <= end ; num += jump){
    ul.innerHTML += `<li>${num}</li>` ; 
    }
}

//구구단 2단 출력하기
function check07(){
    for(let num = 1 ; num <= 9 ; num ++ ){
        console.log(`2 x ${num} :  ${2*num}` );
    }
}

// 구구단 입력한 단 출력하기
function excuteFn3(){
    const value = Number(document.getElementById("input3").value);
    const result = document.getElementById("result3");
    result.innerHTML = "" ;

    for(let num = 1 ; num < 10 ; num ++ ){
        result.innerHTML += (`<li>${num} x ${value} : ${num * value}</li>`) ;
    }
}

// 구구단 2~9사이의 입력한 단 출력하기(if, return 이용)

function excuteFn4(){
    const input = Number(document.getElementById("input4").value);
    const result = document.getElementById("result4");
    result.innerHTML = "" ;

    if (input < 2 || input > 9){
        alert("2 ~ 9 사이 값을 입력하세요") ;
        return ; 
    }

    for (stand = 1 ; stand < 10 ; stand ++ ){
        result.innerHTML += (`<li>${input} x ${stand} = ${input * stand}</li>`);
    }

}

//삼육구
function excuteFn5(){
    const input = Number(document.getElementById("input5").value);
    const output = document.getElementById("output5").value; // 문자, 숫자의 값 불러 오기 위한 value
    const result = document.getElementById("result5");
    let kong = "" ;  // 출력할 문자열을 저장 할 변수

    for(let x = 1 ; x <= 50 ; x ++){ // 1~ 50까지 출력
        if (x % input == 0){         // 배수인 경우 output에 입력된 문자로 출력
            kong += output + " " ;
        }else{                       // 아닌 경우 x 그대로 출력
            kong += x + " " ;
        }

        if(x % 10 == 0 ){            // 한 줄에 숫자 10개씩 오게 하기 위해 10의 배수일때 br 태그 추가
        kong +=  "<br>" ;
        }
    }

    result.innerHTML = kong ;
}

//이중 for문을 이용한 다음 모양 출력하기 1
/* 
12345
12345
12345
12345
 */

function check8(){
    for(let y = 1 ; y <= 4 ; y ++ ){ // 4번 반복. y= 1~4 
        
        let str = "" ; // 중복 표시 막기 위한 선언

        for (let x = 1 ; x <= 5 ; x ++){
            str += x ;
        }

        console.log(str);
        console.log("") ;
    }
    
}

// 다음 모양 출력하기 2
/* 
1
12
123
1234
12345 */
// 5번 반복하되 순번과 같은 수 만큼의 수 출력
function check9(){
    for(let x = 1 ; x <= 6 ; x++ ){ //5번 반복
        let str = "" ;
        for(y = 1 ; y <= x ; y ++){
            str += y ;
            
        }
        console.log(str); 
    }
    
}

//감소하는 for 문
function check10(){
    for(let num = 5 ; num >= 1 ; num --){
        console.log(num);
    }
}

// 모양 출력하기 3 
// 5부터 시작. 배열 수 : 5 - 배열의 순서
function check11(){
    for( num = 5 ; num >= 1 ; num --){
        
        let str = "" ;
        
        for( col = 1 ; col <= num ; num ++){
            str += col ;
        }
        console.log(str);
    }
}

// 모양 출력하기 4
function check12(){

    for(let row = 1 ; row <=4 ; row ++ ){
        let str = "" ; 
        for (let col = 1 ; col <= row ; col ++){
            
        }
    }
}
