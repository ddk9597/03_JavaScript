function check1(){
    // 배열 선언 방법
    const arr1 = new Array();
    const arr2 = new Array(3)   ;
    const arr3 = [] ;
    const arr4 = ["사과", "바나나", "딸기", "망고"];

    console.log(arr1, arr2, arr3, arr4);

    // 배열명.length : 배열의 길이(배열의 칸 수 또는 저장된 데이터의 수)

    console.log(arr1.length, arr2.length, arr3.length, arr4.length) ;

    /* 배열의 index(색인, 번호. 내용이 아님) */
    /* 
        - 배열의 각 칸을 구분하는 번호
        - 0부터 시작하는 정수로 순번 부여됨
        - 중간에 번호를 생략할 수 없다(항상 연속적이다)
        - 마지막 index == 배열 길이 -1 (0으로 시작하기 때문에)
    */

    // 배열명[index] -> 배열의 해당 index에 존재하는 데이터를 반환한다.
    console.log('arr4[0] : ', arr4[0]);
    console.log('arr4[0] : ', arr4[1]);
    console.log('arr4[0] : ', arr4[2]);
    console.log('arr4[0] : ', arr4[3]);

    // 배열명[index] = 값; -> 해당 인덱스에 지정된 값을 대입 할 수 있다.
    arr2[0] = 100;
    arr2[1] = "눈 온다" ;
    arr2[2] = true;
    // (JS 배열의 특징 : index 별로 자료형을 다르게 할 수 있다. 권장하지는 않음.)
    console.log(arr2);



    // --------------------------------------------------

    /* JS 배열 특징을 이용한 사용법 */

    // 1. 길이 제한이 없으며 index 수가 유연하게 지정됨 -> 값을 배열에 자유롭게 추가 가능
    arr1[0] = "가" ;
    arr1[1] = "나" ;
    arr1[2] = "다" ;
    console.log("arr1 : " , arr1);

    // 2. 원하는 index에 값을 자유롭게 추가 할 수 있다
    // -> 중간에 건너뛴 index는 빈칸으로 채워진다
    arr1[5] = "마" ;
    console.log("arr1 : " , arr1);
}

/* 배열 x for문 */
function check2(){

    // for문을 이용해서 배열 요소 초기화 하기

    // index : 배열의 각 칸을 구분하는 번호
    // 배열 요소 : 배열의 각 칸
    // 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것

    /* for 문 사용 안함 */
    const arr1 = [] ;

    arr1[0] = '김밥';
    arr1[1] = '라면';
    arr1[2] = '떡볶이';
    arr1[3] = '볶음밥';

    /* for문 사용하여 위와 같이 만들기 */
    const arr2 = [];

    for(let i= 0 ; i < 4 ; i ++){
        arr2[i] = i * 10 ; 
    }

    console.log("arr1 :", arr1 );
    console.log("arr2 :", arr2 );


}
/* 배열 x for문 2 (순차접근, 반복접근) */
function check3(){
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for문을 이용해서 배열의 모든 요소 접근하기
    // 순차접근 또는 반복접근이라고 함
    const arr1 = [10, 20, 50, 100, 500, 1000]; 

    // index는 0부터 배열 길이-1까지 1씩 증가
    for(let i = 0 ; i < arr1.length ; i ++ ){
        console.log(`arr1[${i}] == ${arr1[i]}`) ;

    }
}

/* 배열 x for문 3  */
function check4(){
    /* 
    for문을 이용해서 배열을 순서대로 초기화 한 후
    다른 for 문을 이용해서 배열 요소를 하나씩 모두 출력하기
     */

    const arr = new Array(5); // 5칸짜리 배열(요소별로 내용 없음)

    // 배열을 순서대로 초기화
    for ( let i = 0 ; i < arr.length ; i ++){
        arr[i] = Number(prompt(`${i} 번째 숫자 입력`));
    }

    // 배열 요소를 하나씩 모두 출력 +sum

    let sum = 0; //합계

    for( let i = 0 ; i < arr.length ; i ++){

        console.log(`arr[${i}] : ${arr[i]}`) ;

        sum += arr[i]; //값 누적
    }
    console.log("값 누적 : ", sum) ;
    console.log("평균 : ", sum / arr.length);
}


/* 점심 메뉴 뽑기 */
function selectMenu(){

    // 결과가 출력 될 span
    const menuResult = document.getElementById("menuResult");

    // w점심 메뉴로 초기화된 배열 생성
    const menus = ["굶기", "분식", "제육볶음", "돈가스", "샌드위치", "KFC", "맘스터치", 
    "중국집", "순대국", "빵", "우육면", "라면", "초밥", "마라탕"]

    // menus 배열 index 범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random() * menus.length);

    // 난수 번째 index 요소 값을 화면에 출력
    menuResult.innerText = menus[randomNumber];

}