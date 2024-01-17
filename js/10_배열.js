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

/* 주문하기 프로그램 */

function orderFn(){

    /* 코딩 목표 */
    // - 주문하기 버튼 클릭 시 prompt를 이용해서 
    // - 메뉴명, 수량을 입력 받기
    // - 메뉴 입력 시 취소를 클릭하면 "주문 완료"
    // - 수량 입력 시 취소를 클릭하면 해당 메뉴 주문만 취소

    const tbody = document.getElementById("tbody");
    const total = document.getElementById("total")

    // 메뉴 배열
    const menus = ["라면", "김밥", "갈비만두", "우동"] ;

    // 가격 배열
    const prices = [4000, 3000, 4500, 6000];

    // 주문한 메뉴 카운트 배열
    // 메뉴 개수와 동일한 크기를 가진 배열
    const counts = new Array(menus.length) ; //->모든 칸 비어있음

    // 비어있는 칸을 0으로 채움
    // for(let i = 0 ; i < counts.length ; i ++){
    //     counts[i] = 0 ;
    // }  - 이것과 동일한 JS 함수
    counts.fill(0);

    while(true){ // 무한 반복

        const selectMenu = prompt("주문할 메뉴명 입력(완료시 취소)");
        
        if(selectMenu == null){ // 메뉴명 입력시 취소를 클릭한 경우
            break;
        }
        
        /* 입력한 메뉴가 menus 몇번째 index에 존재하는가? - for || JS함수 */
        // -> 배열 검색

        // 2) 배열명.indexOf("값")
        // - JS 배열에서 제공하는 함수
        // - 배열 내에 "값"이 존재하는 index 번호를 반환
        // - 없다면 -1 반환

        let idx = menus.indexOf(selectMenu);

        // 잘못 주문한 경우 (idx == -1 ) 다시 반복 시작
        if(idx == -1) {
            alert("제대로 주문하세요");
            continue;

        }

        // ----------------- 메뉴입력 끝, 수량 입력 시작 -----------------

        let inputQ = prompt("수량을 입력하세요") ;

        if(inputQ == null){ //수량 입력 취소 -> 다시 메뉴 입력
            continue ; 
        }

        //수량을 입력하지 않거나 숫자를 입력하지 않은 경우
        if(inputQ.length == 0 || isNaN(Number(inputQ))){ 
            alert(" 똑바로 입력하라고. 처음부터 주문하세요");
            continue ;
        }

        inputQ = Number(inputQ); // 숫자로 변환해서 저장

        // -------- 수량 입력 끝 menus, prices, count 배열에 값 변경 시작 --------//

        //

        // idx : 선택한 메뉴가 존재하는 index 번호
        // input : 입력한 수량(number 자료형)

        counts[idx] += inputQ;

    } // while 종료

    // 중간확인
    console.log(menus);
    console.log(prices);
    console.log(counts);
    
    //--------------------------------

    // 화면 출력하기 + 합계(total계산) 시작

    // tbody 이전 내용 지우기
    tbody.innerHTML = "" ;
    let sum = 0; // 합계 구하기 변수
    for(let i = 0 ; i < counts.length ; i ++){
        if(counts[i]==0){ // 메뉴를 주문하지 않은 경우
            continue; 
        }

        // 한 줄 만들기
        let tr = "<tr>"

        tr += `<td>${menus[i]}</td>`;
        tr += `<td>${prices[i]}</td>`;
        tr += `<td>${counts[i]}</td>`;

        tr +="</tr>"

        // 화면에 tr 출력하기
        tbody.innerHTML += tr;

        // 합계 누적하기
        sum += prices[i] * counts[i] ;
    } //for문 끝

    total.innerText = sum; // 합계 화면에 출력
    
}

// ------------------------------------------------

/* 2차원 배열 */
function check5(){
    const arr = [ [1,2,3,4],
                  [5,6,7,8],
                  [9,10,11,12] ] ;


    // 1차원 배열 선언
    const arr1 = [100,200,300,400] ;
    const arr2 = [900,800,700,600] ;

    // 2차원 배열 arr의 3,4번 인덱스 요소로 추가
    arr[3] = arr1;
    arr[4] = arr2;
                 
    console.log(arr)    ;

    // 2차원 배열 요소 조회하는 방법 (선택해서 보기)

    // 배열명[행][열]
    console.log(arr[1][3]); // 8
    console.log(arr[4][3]); // 600
    console.log(arr[0][0]); // 1

}


/* 
2부터 2씩 증가하는 수를 5행 5열 배열의 모든 요소에 차례대로 대입하고 출력하기
*/
function check6(){

    let count = 2 ;

    const arr = []; // 2차원 배열 (요소로 1차원 배열을 대입할 것)

    for(let row = 0 ; row < 5 ; row ++){ // 행 제어 for 문

        // 1차원 배열을 만들어 arr[i]에 대입
        arr[row] = [];

        for(let col = 0 ; col < 5 ; col ++){ // 열 제어 for 문
            arr[row][col] = count ; // row 행 col 열에 count 대입
            count += 2 ;            // count를 2 증가. 행이 넘어가도 count 값은 유지되어 계속 증가
        }

    }
    console.log(arr);

    // 계속해서  2차원 배열 arr 요소 거꾸로 출력하기

    //row -> 4,3,2,1,0
    for(let row = arr.length - 1 ; row >= 0 ; row--) {

        let str = "";

        //col -> 4,3,2,1,0
        for(let col = arr[row].length -1 ; col >= 0 ; col --){
            str += arr[row][col] + " "  ;
        }

        console.log(str);

    }
    

}