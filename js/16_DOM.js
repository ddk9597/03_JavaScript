/* Node 확인 하기 */

document.querySelector("#btn1").addEventListener("click", () => {

    const test = document.querySelector("#test"); // ul
  
    // #test의 모든 자식 노드 얻어오기(요소.childNodes)
    const list = test.childNodes;
    console.log(list);

    // 자식 노드 중 첫 번째 li 요소
    
    const li1 = list[3];
    console.log(li1);

// 1. li의 부모 노드 찾기(요소.parentNode)
// -> li1 부모 노드 배경색 변경하기
li1.parentNode.style.backgroundColor = "skyblue";



// 2. 첫 번째 자식 노드 찾기(요소.firstChild)
// -> #test(ul태그)의 첫 번째 자식 노드 찾기
console.log(test.firstChild);

// 3. 마지막 자식 노드 찾기(요소.lastChild)
// -> #test(태그)의 마지막 자식 노드 찾기
console.log(test.lastChild); 

// 4. 원하는 위치(index)에 존재하는 자식 노드 찾기(요소.childNodes[index])
// -> #test의 자식 노드 중 3번째 li 태그를 찾아서 배경색 pink 지정하기
test.childNodes[9].style.backgroundColor = "pink" ;

// 5. 이전/다음 형제 노드 찾기 
// (이전 형제 노드 : 요소.previousSibling)
// (다음 형제 노드 : 요소.nextSibling)

// -> 탐색용 코드는 연달아서 작성 가능하다!!!!!
// test.childNodes[9] 의 다음 다음 형제 노드 선택하기
console.log("test[9]의 다음 다음 형제 노드",test.childNodes[9].nextSibling.nextSibling); // ==test.childNodes[11]

// #test의 마지막 자식 노드의 이전 형제 노드 선택
console.log("마지막 자식 노드의 이전 형제 노드 :",test.lastChild.previousSibling);
  
/* ***** 노드 추가 ***** */

// 1. 마지막 자식 노드로 추가(appendChild(node))
// -> list[11] 마지막 자식으로 "ZZZ"라는 TextNode 추가
list[11].appendChild(document.createTextNode("ZZZ"));

// 2. 마지막 자식으로 추가(append( "내용" 또는 노드 또는 요소 * n ) )
list[11].append("12345", "abcd", "가나다라");

// 3. 첫번째 자식으로 추가 (prepend(내용 노드 요소))
list[11].prepend("아", "집에","가고싶다");
list[11].prepend("나는 어디로갈까"); // 첫 번째 자식(맨 앞)추가

// 4. 이전/다음 형제로 추가(before/after("내용","노드","요소") );
test.before("이전입니다");
test.after("이후입니다");


});


/* -------------------------------------- */

/* 요소(Element) 탐색 */

const btn2 = document.querySelector("#btn2");

btn2.addEventListener("click", () => {
    // #test2 요소 얻어오기

    const test2 = document.querySelector("#test2");

    // #test2의 모든 자식 요소
    console.log(test2.children);

    // #test2의 부모요소
    console.log(test2.parentElement);

    // #test2의 첫 자식 요소
    console.log(test2.firstElementChild);

    // #test2의 마지막 자식 요소
    console.log(test2.lasttElementChild);

    // #test2의 이전 형제 요소
    console.log(test2.previousElementSibling);

    // #test2의 다음 형제 요소
    console.log(test2.nextElementSibling);

    // #test2의 0번 자식 요소
    console.log("0번 자식 요소 : ",test2.children[0]);
    
    // #test2의 3번 자식 요소
    console.log("3번 자식 요소 : ",test2.children[3]); 
});