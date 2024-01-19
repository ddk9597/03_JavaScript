// document.getElementById('btn').addEventListener('click', () => {
//     const containers = document.querySelectorAll('.container div');
//     containers.forEach((container, index) => {
//         const input = container.querySelector('input');
//         const box = container.querySelector('.box');
//         const color = input.value;
//         box.style.backgroundColor = color;
//     });
// });



// 요소를 한번에 여러개 얻어오면 배열 형태로 저장됨(배열 형태로 포장)
// 얻어온 요소를 사용하려면 배열의 index별 요소를 하나씩 꺼내서 사용해야한다!
// 하나씩 꺼내는 것 : 인덱스를 지정하여 명령
    /* ex) boxList.style.color = "red" (X)
        boxList[0].style.color = "blue" */

const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".input");

document.querySelector("#btn").addEventListener("click", function(){
    for(let i = 0 ; i < boxList.length ; i ++){
        boxList[i].style.backgroundColor = inputList[i].value;
    }
})