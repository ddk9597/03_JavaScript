//변수 선언

//document(문서) : HTML문서(파일)내에서
//get : 얻다
//element : HTML 요소
//ById : Id가 일치하는
const number1 = document.getElementById("input1")

const number2 = document.getElementById("input2")

const result = document.getElementById("calcResult")

/* 두 수를 더해서 화면에 출력하는 함수(기능) */
function plusFn(){

    /* input요소. value : input 요소에 작성된 값 얻어오기 */
    const value1=number1.value;
    const value2=number2.value;


    console.log(value1, value2);
        

    console.log("두 수의 합 : ", value1 + value2);
    /* input 요소에 작성된 값은 무조건 문자열 */
    /* 더했을 때 이어쓰기 되는 문제가 발생한다 */

    // 해결 방법
    // 문자열( string)을 숫자(number)로 변경하는 코드를 수행
    // -> 데이터 파싱(data parsing) : 데이터의 종류를 바꿈

    /* 숫자만 작성된 문자열("123")을 진짜 숫자(123)으로 바꾸는 법 */
    // -> Number("123")


    console.log("두 수의 합 : ", Number(value1) + Number(value2));

/* 두 수의 합을 아이디가 calcResult인 요소의 
    내부 글자(InnerText, HTML 요소 내용)로 대입하기 */

    result.innerText = Number(value1) + Number(value2);
    
}//plusFn

function minusFn(){
    //string으로 얻어온 값을 바로 number 로 변환하여 변수에 대입
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);

    console.log("value1 : ", value1, typeof value1);
    result.innerText = Number(value1)-Number(value2);
}

function multiFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = Number(value1)*Number(value2);
} 

function divFn() {
    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = Number(value1)/Number(value2);
} 

// 나머지 연산함수

function modFn(){
    /* 나머지 연산은 나누기 계산 시 몫이 정수인 부분까지만 계산하고 
        그 남은 값을 출력한다. */

    const value1 = Number(number1.value);
    const value2 = Number(number2.value);
    result.innerText = Number(value1)%Number(value2);

}

const num1 = document.getElementById("num1")
const num2 = document.getElementById("num2")
const num3 = document.getElementById("num3")

const triple = document.getElementById("total")

function plusFn(){
    const value1 = Number(num1.value)
    const value2 = Number(num2.value)
    const value3 = Number(num3.value)

    total.innerText = value1 + value2 + value3;
}


//------------------------------------------------------------------------------------------

/* 증가 감소 연산자 ++, -- */

// 증가, 감소 할 수를 저장할 변수 선언
let aaa = 0; //(주의) const 로 선언하면 값을 증가, 감소시킬 수 없다!

// 문서 내에서 id가 "result2" 인 요소를 얻어와 result2 변수에 대입
const result2 = document.getElementById("result2");

/* 1 증가 함수 */
function increase(){
    ++aaa //또는 count++ -> count 값이 1 증가

    // 증가한 count 값을 result2의 내용으로 대입
    result2.innerText = aaa;
}

function decrease(){
    --aaa //또는 count-- -> count 값이 1 감소

    // 감소한 count 값을 result2의 내용으로 대입
    result2.innerText = aaa;
}

/* 전위, 후위 연산 확인하기 */

function check1() {

    // 함수 안과 밖은 구분되는 공간으로 생각하면 된다
    // 동일한 이름의 변수를 함수 안팎으로 생성했다면 서로 다른 변수임(동명이인)
    let count = 100;

    // 컴퓨터한테 연산은 코드를 하나 하나 실행하는 것이다

    // 전위연산 (++count, --count) 확인
    // ->다른 연산보다 먼저 수행이 된다
    // count 값이 먼저 증,감된 후 console에 출력이 된다!

    console.log("++count", ++count); //101
    console.log("++count", ++count); //102
    console.log("++count", ++count); //103
    console.log("-------------------------");
    console.log("--count", --count); //102
    console.log("--count", --count); //101
    console.log("--count", --count); //100
    
    // 후위연산
    // ->다른 연산이 모두 끝난 후 마지막에 수행된다

    console.log("-------------------------");


    count=50;

    console.log("count++", count++); //50 출력 후 51로 증가
    console.log("count++", count++); //51 출력 후 52로 증가
    console.log("count++", count++); //52 출력 후 53로 증가
    console.log("-------------------------");
    console.log("count++", count--); //53 출력 후 52로 감소
    console.log("count++", count--); //52 출력 후 51로 감소
    console.log("count++", count--); //51 출력 후 50로 감소

    console.log("-------------------------");

    count=30;

    console.log("count++", count++);
    console.log("후위연산확인",count);
    console.log("-------------------------");

    let a= 10;
    let b = 5;
    let c = ++a*b--;

    // 최종적으로 a,b,c에 저장된 값은?
    // a == 11  b == 4  c == 55 이지 않을까

    console.log(a,b,c);




}
