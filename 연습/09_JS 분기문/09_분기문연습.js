/* 
분기문
- 반복문 수행 중 반복을 멈추거나 넘어가는 구문
- break : 가장 가까운/ 감싸고 있는 반복문을 멈춤
- continue : 가장 가깝거나 감싸고 있는 반복문의 시작 부분으로 
             이동 후 다음 반복으로 넘어간다(반복문의 내부에서만 이동)
*/

/* break의 기능 확인하기 */
function check1(){
    // 1부터 10까지 1씩 증가하다 5에서 멈춤
    for(let i = 1 ; i < 11 ; i ++){
        console.log("i :", i);

        if( i == 5) break;
    }
}

/* 1~30 1씩 증가하는 수열에서 홀수 또는 10의 배수인 경우 건너뜀 */
function check4(){
    for(let i=1 ; i <31 ; i++){
        if(i % 2 != 0 || i % 10 == 0) continue;
        console.log("i :", i);
    }
    
}

/* up down game */
function startGame(){
    // 난수 생성
    const randomNumber = Math.floor(Math.random()*100) + 1;

    // 정답 시도 횟수
    let count = 0 ;

    // prompt 에 작성될 문자열
    let str = "1 ~ 100 사이 숫자를 입력해 주세요" ;

    // while 무한반복
    while(true){
        // 값 입력은 prompt를 통해서 받기
        // 확인 : 입력한 값, 취소 : null
        let input = prompt(str);

        if (input== null){
            alert("게임 포기");
            break ; // 현재 반복문 종료후 블록 밖으로
        }

        input = Number(input);
        if(isNaN(input)){ //숫자가 아니면 true, 내부 코드 실행
            alert("숫자만 입력하세요")
            continue; //현재 반복 종료 후 다음 반복으로
        }

        // 숫자를 입력한 경우
        // 시도 횟수 1회 추가
        count ++ ;
        // 정답을 맞춘 경우
        if(input == randomNumber){
            alert(`정답입니다( 정답 : ${input} / 시도횟수 : ${count})`);
            break ; // 함수 종료 후 값을 반환
        }

        // 입력한 값이 정답보다 큰 경우
        if(input > randomNumber){
            alert(`Down / count : ${count}`);
        }else{
            alert(`up / count : ${count}`);
        }
    }
}
