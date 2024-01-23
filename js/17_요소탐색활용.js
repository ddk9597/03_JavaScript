const inputList = document.querySelectorAll(".color-input");

document.querySelector("#changeButton").addEventListener("click", ()=>{

    for(let i = 0 ; i <inputList.length ; i ++){ // .박스와 인풋의 인덱스 동위 설정 
        const box = inputList[i].previousElementSibling;
        box.style.backgroundColor = inputList[i].value;
    }

});

/* 
같은 인덱스를 이용하는 방법은 한계가 존재함
대상 요소를 확실하게 선택한 후 탐색 코드를 이용해서 찾아가 
원하는 코드 기능을 적용시키는 것이 좋다 
*/