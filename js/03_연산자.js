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

    total.innerText = value1 + value2 + value3
}
