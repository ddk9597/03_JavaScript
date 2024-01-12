/* if 양수인지 검사하겠다 */

const input1 = document.getElementById("input1")

function check1(){
    const value = Number(input1.value); //입력 받은 값

    if(value > 0){ //value가 0보다 커서 true인 경우
        alert("양수입니다.")
    }
    
    //value가 0보다 같거나 작아서 true인 경우
    //value가 양수가 아닌 경우
    if(value <=0 ){ 
        alert("양수가 아닙니다.")
    }
}

/* inf- else  홀짝 판별하기 */
function check2(){
    //난수 발생 : Math.random()
    //난수 범위 : 0<= Math.random() <1
    
    // 0~100 사이 난수
    const randomNumber =Math.floor(Math.random()*101)


    if (randomNumber % 2 == 1) {
        alert(`${randomNumber}은(는) 홀수입니다.`);
    }

    else{
        alert(`${randomNumber}은(는) 짝수입니다.`);
    }

}

/* -3 ~ 3 사이 난수 만들기 */
function check3(){
    const randomNumber = Math.floor(Math.random()*7)-3 ;
    

    let message = randomNumber + "은/는";
    
    if(randomNumber == 0){
        // message = message +"0 입니다";
        message += "0입니다." ; //복합 대입 연산자 활용
    }

    else if(randomNumber > 0){
        message += "양수입니다.";
    }

    else { //0도 양수도 아닌 경우 == 음수인 경우
        message += "음수입니다.";
    }


    alert(message);
}


/* 어린이, 청소년, 성인 구분하기 */
const inputAge  = document.getElementById("inputAge") ;
function check4(){
    
    //입력한 나이 값을 얻어오기
    const age = Number(inputAge.value);
    console.log('age : ', age)

    // if( !(age >= 0 && age<=150)){
    if(age < 0  || age > 150){
        alert("잘못 입력하셨습니다.")
    }
    
    else if(age>=0 && age<=13){
        alert("어린이");
    }

    else if( age<=19){
        alert("청소년");
    }

    else{
        alert("성인");
    }


}