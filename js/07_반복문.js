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

// 감소하는 for 문
function check10(){
    // 5 4 3 2 1 로 감소하면서 출력

    for(let num = 5 ; num >= 1 ; num -- ){ 
        console.log(num);
    }

}

//다음 모양 출력하기 3
function check11(){

    for(let row = 5 ; row >= 1 ; row --){

        let str = "";
        for(let col = 1 ; col <= row ; col ++){
            str += col ;
        }
        console.log(str);
    }
    

}


//다음 모양 출력하기 4
// if, for문 내에 코드가 한 줄만 있다면 {} 생략 가능
function check12(){

    // 위쪽 삼각형
    for(let row=1 ; row <= 3 ; row++){
        
        let str = "";
        for(let col=1 ; col<=row ; col++)   str += col;
        console.log(str);
    }
  
    // 아랫쪽 삼각형
    for(let row = 4 ; row >= 1 ; row--){
    
        let str = "";
        for(let col=1 ; col<=row ; col++)   str += col;
        console.log(str);
    }
  
  
    console.log("----------------")
  
    // 2중 for문 한 번만 사용하기
  
    for(let row = 1 ; row <=7 ; row++){
    
        let end = 0;
        if(row <= 4)  end = row; 
        else          end = 7 - row + 1;
    
        let str = "";
        for(let col = 1; col<=end ; col++){
            str += col;
        }
    
        console.log(str);
    }
}

/* 카운트를 이용해 출력하기  */
function check13(){

    let count = 1; // 카운트를 세기 위한 변수 선언
    
    for(let row =1 ; row <= 3 ; row ++){

        let str = "" ;
        
        for(let col = 1 ; col <= 4 ; col++){
            str += count + " " ;
            count ++ ; // count 값을 1 증가
        }
        console.log(str);
        
    }
    
    
}
    

// 1부터 100 사이 입력된 값의 배수는 몇개인지 구하기
function check14(){

    // 입력된 배수
    const input = Number(document.getElementById("input14").value);

    // 결과 출력할 span
    const result = document.getElementById("result14");

    // 세기 위한 변수 하나 선언 (아직 안세었으니 0개부터 시작)
    let count = 0; 

    for(let num = 1 ; num <= 100 ; num ++){       // 1~ 100 반복

        if(num % input == 0){                     // num 이 input의 배수가 맞는지
            count ++ ;                            // count 하나 체크,
        }
    }
    result.innerText = `${input}의 배수 : ${count} 개`;

}


/* 
count 이용하여 출력
1
12
123
1234
123
12
1
 */

function check15(){

    let count = 0 ;

    for(let row = 1 ; row <= 7 ; row ++){

        if(row <= 4 ) count++; // 4행 이하일 경우 count1 증가
        else          count--; // 4행 초과일 경우 count1 감소

        let str = "" ;
        for(let col = 1 ; col <= count ; col ++){
            str += col ;

        }
    console.log(str);

    }
}

/* while 문 확인하기 */
function check16(){

    let val; //변수를 선언만 하기 (지금은 undefined)


    // 취소를 누르기 전 까지 반복하겠다.(취소를 누르면 반복하지 않겠다.)
    while(val !== null){
        
        /* 동일 비교 연산자 */
        // !== -> 값, 자료형이 모두 다른 경우 true
        // !=== -> 값, 자료형이 모두 같은 경우 true
    
    val = prompt("입력 후 확인을 누르세요"); // 변수에 prompt 값 대입
    // 확인 : 입력한 값
    // 취소 : null

    console.log(val);
    }
}

/* 메뉴 주문하기 */
function check17(){
    
    // 메뉴 가격
    const gimbap = 3000;
    const ramen = 3500;
    const donkkaseu = 5000; 

    // 주문 갯수 count
    let gCount = 0; // 김밥
    let rCount = 0; // 라면
    let dCount = 0; // 돈가스 



    //prompt로 입력한 값을 저장 할 변수
    let input; //undefined

    while(input !== null){ //취소 누르기 전까지 반복하겠다

        input = prompt("메뉴 번호를 입력하세요.");

        switch(input){
            case '1' : gCount ++ ; break;
            case '2' : rCount ++; break;
            case '3' : dCount ++; break;
            case 'null' : alert("주문 완료!"); break;

            default : alert("메뉴에 작성 된 번호만 입력해 주세요"); break;
        }
    }

    alert(`김밥 ${gCount}, 라면${rCount}, 돈가스${dCount}`);
    let sum = (gCount * gimbap) + (rCount * ramen) + (dCount * donkkaseu);
    alert(`총 가격 : ${sum} 원`)
}

/* while을 for문 처럼 사용하기 */

function check18(){

    // 1~10 출력하기. 
    // for문 해석 순서대로 해석되게 하면 됨(조건식1, 조건식2, 실행문, 증감식)

    let num =1 ;
    
    while (num < 11 ){
        console.log(num) ;
        num++ ;
    }   

    console.log("--------------------")
    

    /* 10~1 1씩감소. while문으로 */

    let x = 10
    while(x > 0){
        console.log(x) ;
        x -- ;
    }
}