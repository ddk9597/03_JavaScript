function check1(){
    // 배열 선언 방법
    const arr1 = new Array();
    const arr2 = new Array(3)   ;
    const arr3 = [] ;
    const arr4 = ["사과", "바나나", "딸기", "망고"];

    console.log(arr1, arr2, arr3, arr4);

    // 배열명.length : 배열의 길이(배열의 칸 수 또는 저장된 데이터의 수)

    console.log(arr1.length, arr2.length, arr3.length, arr4.length) ;

    /* 배열의 index(색인, 번호) */
    /* 
        - 배열의 각 칸을 구분하는 번호
        - 0부터 시작
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