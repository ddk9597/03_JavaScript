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
