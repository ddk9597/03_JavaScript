// 배열 선언 방법 4가지
function check1(){
const arr1 = new Array();
const arr2 = new Array(3);
const arr3 = [];
const arr4 = ["사과", "바나나", "딸기", "망고"] ;
console.log(arr1, arr2, arr3, arr4);

console.log("-----------------");
// 배열명[index] : 배열의 해당 index에 존재하는 데이터를 반환한다
console.log("arr4[0] : ",arr4[0]);
console.log("arr4[1] : ",arr4[1]);
console.log("arr4[2] : ",arr4[2]);
console.log("arr4[3] : ",arr4[3]);
console.log("-------------");


// 베열명[index] = 값; -> 해당 배열의 해당 index에 값 대입 가능

arr2[0] = "감사"
arr2[1] = "김치"
arr2[3] = "고기"
console.log(arr2);
console.log("-------------");
}

/* 배열과  for 문 */
function check2(){
    // for문을 이요하여 배열 요소 초기화하기
    // index: 배열의 각 칸을 구분하는 번호
    // 배열 요소 : 배열의 각 칸
    // 초기화 : 변수/배열 요소에 최초로 값을 대입하는것

    /* for문 사용 없이 대입하기 */
    const arr1=[];
    arr1[0] = "for"
    arr1[1] = "없이"
    arr1[2] = "배열"
    arr1[3] = "초기화"
    console.log(arr1);
    console.log("------------");

    /* for 사용하여 배열 초기화하기 */
    const arr2 = [];
    for(let i = 0 ; i < 4 ; i ++){
        arr2[i] = i * 10 ;
        console.log(arr2);
    }
}

/* 베열과 for문(순차접근, 반복접근) */
function check3(){
    // 배열에 저장된 값 하니씩 순서대로 출력하기
    // ->for 문을 이용하여 배열의 모든 요소 접근하기

    const arr1 = [0, 10, 20, 30, 40,50,60]
    for(let i = 0 ; i < arr1.length ; i ++){
        console.log(`arr1[${i}] = ${arr1[i]}`);
    }
}

/* 배열과 for문 3 */
function check4(){
    /* for문을 이용하여 배열을 순서대로 초기화 한 후 
    다른 for 문을 이요해서 배열 요소를 하나씩 모두 출력하기 */

    const arr = new Array(5);

    // 배열을 순서대로 초기화
    for(let i = 0 ; i < arr.length ; i ++){
        arr[i] = Number(prompt(`${i}번째 숫자 입력`));
    }

    // 배열 요소를 하나씩 모두 출력후 합계와 평균 나타내기
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i ++){
        console.log(`arr[${i}] : ${i}`);
        sum += arr[i] ;
    }
    console.log("합계 :", sum);
    console.log("평균값 :", sum/arr.length);

}