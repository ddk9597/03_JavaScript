function check1(){
    // for([1]초기식 ; [2]조건식 ; [4]증감식){
    //   [3]조건식이 true인 경우 반복 수행할 코드;
    // }



    let result = ""; //빈 문자열
    for ( let num = 1 ; num <= 5 ; num++){
        result += num ;// 복합 대입 연산자.
        /* 문자열 "" + 숫자열 1 = 문자열 1 */
        /* 문자열 1 + 숫자열 2 = 문자열 12 ... 반복 */
        console.log("result : ", result) ;
    }
}

function check2() { 
    //1부터 10까지 출력하기

    for( let num = 1 ; num <= 10 ; num++){
        console.log("num : ", num) ;
    }
}

function check3(){
    // 1부터 20까지 1씩 증가하며 출력
    for( let num = 1 ; num <= 20 ; num++){
        console.log("num :", num);
    }
}

// 5부터 15가지 1씩 증가하며 출력
function check4(){
    for( let num = 5 ; num <=15 ; num++ ){
        console.log("num :", num);
    }
}

//1부터 30까지 2씩 증가하며 출력
function check5(){
    for(let num = 1 ; num <= 30 ; num += 2 ){
        console.log("num : ", num);
    }
}

//1부터 10까지 모든 정수의 합
function check6(){

    let sum = 0; //합계를 저장하기 위한 변수
                 //0을 대입한 이유 : 0은 더해도 아무런 영향이 없기 때문에

    for(let num = 1 ; num <= 10 ; num ++){// num의 값이 1~10 변함
        sum += num ; // sum 에 num 값 1~10 누적

        console.log("sum :", sum);

    }
}

// 입력 받은 범위 내 모든 정수의 합
function sumFn() {
    //input에 작성된 값을 얻어와 저장
    const start = Number(document.getElementById("inputNumber1-1").value);
    const end = Number(document.getElementById("inputNumber1-2").value);

    // 결과를 출력하기 위한 요소 (span #result1)인 요소 얻어와 저장
    const result1 = document.getElementById("result1");

    // 합계를 저장할 변수
    let sum = 0; 

    // strat부터 end까지 1씩 증가하는 for문
    for(let num = start ; num <= end ; num++){
        sum += num; //num 값을 sum에 누적해라
    }

    result1.innerText = sum;

}

//입력 받은 범위 내에서 증감식 만큼 증가하며 모든 정수 출력하기

function excuteFn2(){
    const start = Number(document.getElementById("inputNumber2-1").value) ;
    const end = Number(document.getElementById("inputNumber2-2").value) ;
    const val = Number(document.getElementById("inputNumber2-3").value) ;

    const ul = document.getElementById("result2") ; //결과를 출력할 ul 요소 

    ul.innerHTML = "" ; //이전 ul에 작성된 내용을 지우기

    // start부터 end까지 val씩 증가한다.
    for(let num = start ; num <= end ; num += val){
        ul.innerHTML += `<li>${num}</li>`; // += : 누적시키기, = : 덮어씌우기
    }
}

// 요소.innerText = "문자열"; -> 요소의 내용으로 문자열을 대입해라
//      innerText 특 ) html 태그를 해석하지 않고 그대로 보여줌

// 요소.innerHTML  = "<h2>문자열</h2>"; -> HTML태그를 해석해서 화면에 출력



/* 구구단 2단 출력하기 */
function check07(){
    for(let num = 1 ; num <= 9 ; num ++){
        console.log(`2 x ${num} = ${2*num}`);
    }
}

/* 구구단 입력한 단 출력하기 */
function excuteFn3(){

    const tier = Number(document.getElementById("input3").value); //입력한 단의 값을 숫자로 변환 후 가져옴
    const result = document.getElementById("result3"); // ul태그 내에 입력 될 결과 값
    result.innerHTML = "" ; //이전 기록 지움

    for(let num = 1 ; num <= 9 ; num ++){
        result.innerHTML += (`<li>${tier} x ${num} = ${tier*num}</li>`) ;
    }
}

/* 구구단 입력한 단 출력하기 */
function excuteFn4(){

    const tier = Number(document.getElementById("input4").value); //입력한 단의 값을 숫자로 변환 후 가져옴
    const result = document.getElementById("result4"); // ul태그 내에 입력 될 결과 값
    result.innerHTML = "" ; //이전 기록 지움

    // 입력 받은 단이 2 ~ 9 사이가 아닐 경우 알림창 띄우기

    if(tier < 2 || tier > 9){
        alert("2 ~ 9 사이만 입력해주세요.");

        return; // 함수를 종료하고 호출한 곳으로 돌아감
                // 지금 단계에선 함수 종료 정도로만 이해
                // 요즘 트렌드라고 합니다
    }

    for(let num = 1 ; num <= 9 ; num ++){
        result.innerHTML += (`<li>${tier} x ${num} = ${tier*num}</li>`) ;
    }
}

function excuteFn5(){
    // 배수
    const input = Number(document.getElementById("input5").value);

    // 모양
    const output = document.getElementById("output5").value ; 

    // 출력할 div 
    const result = document.getElementById("result5");

    //출력할 문자열을 저장할 변수
    let str = "";

    for(let x = 1 ; x <= 50 ; x++){
        if (x % input == 0){//x가 input의 배수인 경우

            //str에 x 대신 output을 대입한다.
            str += output + " ";

        } else{
            str += x + " ";
        }

        //10의 배수마다 str에 <br> 태그 추가하기
        if(x % 10 == 0){
            str += "<br>"
        }

    }

    result.innerHTML = str;
}



/* 
다음 모양 출력하기 1
12345
12345
12345
12345
*/

function check8(){

    // 4번 반복하는 for문
    for(let y =1 ; y <= 4 ; y ++){

        // 12345 출력하는 for문
        let str = "" ;
        
        for(let x = 1 ; x <= 5 ; x++){
            str += x ;
        }
        console.log(str);
        console.log(" ");

    }

    
}

/* 
    다음모양 출력하기 2
    1
    12
    123
    1234
    12345 
*/

function check9(){

    for(let y = 1 ; y <= 5 ; y ++){

        let str = "";
        for(let x = 1 ; x <= y ; x ++){
            str += x;
        }
        console.log(str);
    }
}