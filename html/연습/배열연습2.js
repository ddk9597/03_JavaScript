// 배열 선언 방법

function check1(){
    const arr1 = new Array() ;
    const arr2 = new Array(3) ;
    const arr3 = [] ;
    const arr4 = ["교회", "그만", "다니고", "취직준비", "해서", "결혼준비", "까지"] ;

    //출력
    console.log(arr1, arr2, arr3, arr4);

    //배열명.length : 배열의 길이(데이터 저장 여부와 관계 없는 배열의 칸 수)

    const arr5 = new Array(5)   ;
    arr5[1] = 100 ;
    arr5[2] = 300 ;
    arr5[4] = 500 ;

    console.log(arr5, arr5.length);

    /* 배열의 index */
    // index
    // 각 칸을 구분하는 번호
    // 0부터 시작하는 정수로 순번 부여됨
    // 항상 연속적으로 중간에 번호를 생략 할 수 없다
    // 마지막 index == 베열길이 -1(0으로 시작하기 때문에)

    // 배열명[index] = 값 ; -> 해당 배열의 해당 인덱스에 값을 대입하기
    console.log(" ---------- ")
    console.log(arr2);
    arr2[0] = "쥰내게" ;
    arr2[1] = "공부해야" ;
    arr2[2] = "취직한다" ;
    console.log(arr2);
}


    /* JS 배열 특징을 이용한 사용법 */

    // 1. 길이 제한에 없으며 index 수가 유연하게 지정됨
    //    값을 배열에 추가하는데 제약 없음

    //2. 원하는 index 에 값을 자유롭게 추가 가능
    // -> 중간에 건너뛴 index는 빈칸으로 채워진다
    
    /* 배열 x for문 */
    // for 문을 이용하여 배열 요소 초기화(새로 입력)하기
    // 배열 요소 : 배열의 각 칸
    
    //for 문 사용 없이 
    function check2(){
        const arr1 = [] ;
        
        arr1[0] = "배수진" ;
        arr1[1] = "쳤으니" ;
        arr1[2] = "끝까지" ;
        arr1[3] = "가거라" ;
        
        // for문 사용하여 위와 같이 만들기
        const arr2 = [] ;

        for(let i = 0 ; i < 4 ; i ++){
            arr2[i] = i * 100 ;
        }
        console.log("arr1 :", arr1);
        console.log("arr2 :", arr2);
        
    }

    // 배열 x for문 2 (순차접근, 반복접근)
    // 배열에 저장된 값 하나씩 순서대로 출력하기
    // -> for 문을 이용해서 배열의 모든 요소 접근
    
    function check3(){
        const arr1 = [10,20,30,5,100,12345,]    ;
        const chan = [] ;
        // index는 0부터 배열길이-1 까지 1씩 증가하게
        // 배열 길이만큼 반복해서 출력
        // 각 출력마다 인덱스 값과 인덱스에 저장된 값이 순차적으로 달라지게

        for(let chan = 0 ; chan <= arr1.length -1 ; chan ++){
            console.log(`chan[${chan}] =+ ${arr1[chan]}`);   
            
            
        }
        console.log("------");
        console.log("arr1 : ",arr1);
    }

    /* 배열 x for 문 3 */
    function check4(){
        /* 
        for 문을 이용해서 배열을 순서대로 초기화(값을 최초로 입력)한 후
        다른 for 문을 이용해서 배열 요소를 하나씩 모두 출력하기
        */

        const nirvana = new Array(5);
        // 인덱스 순서대로 초기화

        //초기화하는 for 문
        for(let curt = 0 ; curt < nirvana.length ; curt ++){
            nirvana[curt] = Number(prompt(`${curt} 번째 숫자 입력`));
        }
        // 배열 요소를 하나씩 모두 출력
        let foo = 0; // 합계를 저장할 변수

        // 출력하는 for 문
        for (let dave = 0; dave < nirvana.length ; dave ++ ){
            console.log(`nirvana=[${dave}] : ${nirvana[dave]}`);
            foo += nirvana[dave];
        }
        console.log("값 누적 :", foo);
        console.log("평균 :", foo/nirvana.length);
    }

    /* 랜덤 뽑기 */
    function selectMenu(){
        // 결과가 출력 될 span
        const lunch = document.getElementById("menuResult");

        // 메뉴 생성
        const menu = ["a", "b", "c", "d", "e", "f"]

        // menu 배열 index범위 내에서 난수 생성
        // 난수의 최대 범위는 메뉴의 index 값이므로 menu.length 곱한다
        const pick = Math.floor(Math.random() * menu.length);

        // 생성 된 난수번째 index 요소 값을 화면에 출력
        lunch.innerText = menu[pick];
    }

/* 랜덤 뽑기 2*/
function selectMenu2(){
    //결과가 출력 될 span
    result = document.getElementById("menuSelect");
    // 메뉴 생성
    const menu = ["사과", "바나나", "포도", "샤인머스켓", "망고"]

    // 메뉴 인덱스 범위의 난수 생성
    const pick = Math.floor(Math.random() * menu.length);

    // 생성된 난수번째의 메뉴 인덱스 출력
    result.innerText = menus[pick] ;
}


/* 랜덤 뽑기 3 */
function selectMenu3(){
    result3 = document.getElementById("menuSelect")
    const menu = [1,2,3,4,5,6,7,8,9,10];
    const randomNumber = Math.floor(Math.random()*menu.length);
    result.innerText  = menu[randomNumber]  ;
}

/* 주문하기 프로그램 */
function orderFn1(){
    const tbody = document.getElementById("tbody)");
    const total = document.getElementById("total");
    const menu = [1,2,3,4,5];
    const price = [100,200,300,400,500] ;
    const count = new Array(menu.length);
    count.fill(0)   ;

    while(true){
        const selectMenu = prompt("주문할 메뉴명 입력하세요");

        if(selectMenu == null) break; // 취소를 누른 경우 (null)반복문을 종료한다

        let idx = menu.indexOf(selectMenu);

        if(idx == -1){
            alert("목록에 있는 메뉴를 입력하세요");
            continue ; // 다음 반복으로 넘어간다. 다시 반복 시작.
        }
        

        // 수량 입력하기
        // 프롬프트에 입력된 값을 수량으로 대입, 프롬프트에 메세지 출력

        let count = prompt("수량을 입력하세요");
        if(count == null) continue;
    
        if(count.length == 0 || isNaN(Number(prompt))){
            alert("올바른 수량을 입력하세요")
            continue ;
        }

        count = Number(count);
        
        count[idx] += count; 

        
    } // while 종료

    // 화면 출력 및 금액 계산
    // 이전 값 지우기
    tbody.inneHTML = "" ;
    let sum = 0 ;
    for(let i = 0; )
    
    }

