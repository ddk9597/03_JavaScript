function check1(){
    // 배열 선언 방법
    const arr1 = new Array();
    const arr2 = new Array(3);
    const arr3 = [] ;
    const arr4 = ["김","밥","돌","공","오","사"];

    console.log(arr1, arr2, arr3, arr4);

    // 배열명.length : 배열의 길이(배열의 칸 수 또는 저장된 데이터의 수)

    console.log(arr1.length, arr2.length, arr3.length, arr4.length);
    console.log("-----------");


    // 배열명[index] -> 배열의 해당 index에 존재하는 데이터를 반환함
    console.log("arr4[0] : ", arr4[0]) ; // arr4의 인덱스 0번 콘솔로 출력
    console.log("arr4[1] : ", arr4[1]) ;
    console.log("arr4[2] : ", arr4[2]) ;
    console.log("arr4[3] : ", arr4[3]) ;
    console.log("-----------") ;
    
    // 배열명[index] = 값; -> 해당 인덱스에 지정된 값을 대입
    // JS 배열에서는 index별로 자료형을 다르게 할 수 있으나 권장하지 않음
    arr2[0] = 100;
    arr2[1] = "그만" ;
    arr2[2] = true;

    console.log(arr2) ;
    console.log("-----------") ;
}

    /* 배열 x for문 1 */

    function check2(){
    // for문을 이용해서 배열 요소 초기화하기
    // 배열 요소 : 배열의 각 칸
    // 초기화 : 변수/배열 요소에 처음으로 값을 대입하는 것

    /* for문 사용 없이 배열하기 */
    const arr1 = [] ;
    arr1[0] = "가" ;
    arr1[1] = "나" ;
    arr1[2] = "다" ;
    arr1[3] = "라" ;
    
    /* for문 사용하여 위와 같이 만들기 */
    const arr2 = [] ;
    for(let i = 0 ; i < 4 ; i ++){
        arr2[i] = i * 10 ;
    }

    console.log("arr1 : ", arr1);
    console.log("arr2 : ", arr2);
    console.log("-----------------");
}

/* 배열 x for문2 (순차접근, 반복접근) */
function check3(){
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for 문을 이용해서 배열의 모든 요소 접근하기
    // 순차접근 또는 반복접근이라고 함
    const arr1 = [10, 20, 50, 100, 500, 10000]  ;

    // index는 0부터 배열길이 -1까지 1씩 증가
    // 배열 길이만큼 반복하며 출력
    // 각 출력마다 인덱스 값과 인덱스에 저장된 값이 순차적으로 달라짐
    for(let idx = 0 ; idx <= arr1.length -1 ; idx ++){
        console.log(`arr1[${idx}] == ${arr1[idx]}`) ;
    }
    
}

/* 배열 x for문 3 */
function check4(){
    /* 
    for문을 이용해서 배열을 순서대로 초기화(값을 최초로 입력) 한 후
    다른 for 문을 이용해서 배열 요소를 하나씩 모두 출력하기
    */

    const arr = new Array(5); 
    // 배열을 순서대로 초기화(값을 최초로 입력)

    for(let i = 0 ; i <= arr.length -1 ; i ++){
        arr[i] = Number(prompt(`${i} 번째 숫자 입력`));
    }
    // 배열 요소를 하나씩 모두 출력
    let sum = 0; //합계

    for(let i = 0; i < arr.length ; i ++){
        console.log(`arr[${i}] : ${arr[i]}`) ;
        sum += arr[i] ; // 값 누적
    }
    console.log("값 누적 : ", sum);
    console.log(" 평균 : ", sum / arr.length)
}


/* 점심 메뉴 뽑기 */
function selectMenu(){

    // 결과가 출력 될 span
    const menuResult = document.getElementById("menuResult");

    // 점심 메뉴로 초기화된 배열 생성
    const menus = ["콩밥", "다른 메뉴는 없어"]

    // menus 배열 index 범위 내에서 난수 생성
    const randomNumber = Math.floor(Math.random() * menus.length);

    // 난수번째 index 요소 값을 화면에 출력
    menuResult.innerText = menus[randomNumber];

}

/* 주문하기 프로그램 */

function orderFn(){
    /* 목표 */
    // - 주문하기 버튼 클릭 -> prompt로 메뉴명, 수량 입력받기
    // - 메뉴 입력 취소 -> 주문 완료
    // - 수량 입력 취소 -> 해당 메뉴 주문만 취소

    const tobdy = document.getElementById("tbody");
    const total = document.getElementById("total");

    // 메뉴 배열
    const menus = ["1번메뉴", "2번메뉴", "3번메뉴", "4번메뉴"];

    // 가격 배열
    const prices = [1000, 2000, 3000, 4000];

    // 메뉴 개수와 동일한 크기를 가진 주문한 메뉴 카운트 배열
    const counts = new Array(menus.length) ; // 모든 칸 비어있음

    // 비어있는 칸을 0으로 채움
    counts.fill(0)  ;

    // 무한반복
    while(true){
        const selectMenu = prompt("주문할 메뉴명 입력(완료시 취소)");

        // 메뉴명 입력시 취소를 클릭한 경우 입력 취소하기
        if(selectMenu == null) break ;


        /* 입력한 메뉴가 존재하는 menus의 index 알아내기(배열 검색) */
        let idx = menus.indexOf(selectMenu);

        // 목록에 없는 메뉴 주문한 경우(idx == -1) 다시 반복 시작
        if(idx == -1 ){
            alert("해당 메뉴는 목록에 없습니다.");
            continue ;
        }


        // 메뉴입력 끝, 수량 입력 시작
        // 프롬프트에 입력된 값을 수량으로 대입. 프롬프트에 메세지 출력.
        let Quentity = prompt("수량을 입력하세요"); 

        // 수량 입력시 취소버튼 누른 경우 -> 다시 메뉴 입력
        if(Quentity == null){
            continue;
        }

        //수량을 입력하지 않거나 숫자가 아닌 문자를 입력한 경우 -> 처음부터 주문
        //isNaN(sth) = sth is Not a Number : 주어진 값이 숫자 : false 반환 / 숫자 아님 : true 반환
        if(Quentity.length == 0 || isNaN(Number(Quentity))) {// Quentity 에 문자 입력 시 true 반환
            alert("올바른 수량을 입력하세요.")
            continue ;
        }

        Quentity = Number(Quentity); // 숫자로 변환해서 저장

        // ------ 수량 입력 끝 , menus, prices, count 배열에 값 변경하기 ----------

        // idx : 선택한 메뉴가 존재하는 index 번호(148번 줄에서 선언)
        // Quentity : 입력한 수량(자료형 : number)

        counts[idx] += Quentity ; // 
    }//while 종료

    //화면 출력 및 금액 계산

    //tobody 이전 내용 지우기
    tobdy.innerHTML = "" ;

    // 합계를 저장 할 변수
    let sum = 0; 

    // 메뉴를 주문하지 않은 경우 반복하기
    for(let i = 0 ; i < counts.length ; i ++){
        if(counts[i == 0 ]) continue ;

        // tr 태그를 생성하여 한 줄 메뉴판 만들기
        let tr = "<tr>"

        tr += `<td> ${menus[i]}  </td>` ;
        tr += `<td> ${prices[i]} </td>` ;
        tr += `<td> ${counts[i]} </td>` ;
        
        tr += "</tr>" //tr 태그 닫기

        // 화면에 tr 출력하기
        tobdy.innerHTML += tr ;

        // 합계 누적하기
        sum += prices[i] * counts[i] ;

    } //for문 끝

    total.innerText = sum ; // 누적된 합계 화면에 출력
}


    