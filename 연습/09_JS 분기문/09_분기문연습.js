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