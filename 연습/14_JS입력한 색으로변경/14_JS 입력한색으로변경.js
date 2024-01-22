const boxList = document.querySelectorAll(".box");
const inputList = document.querySelectorAll(".input");

document.querySelector("#btn").addEventListener("click", ()=>{
    for(let i = 0 ; i < boxList.length ; i ++){
        boxList[i].style.backgroundColor = inputList[i].value;
    }
});