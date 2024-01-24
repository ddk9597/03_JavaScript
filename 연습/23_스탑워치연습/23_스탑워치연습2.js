const display = document.querySelector("#display");
const timeList = document.querySelectorAll("#display > span");
let curInterval ;

const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#startBtn");

const recordBoard = document.querySelector("#recordContainer");

let count = 0;

startBtn.addEventListener("click", (e) => {
    if(e.target.innerText === "PAUSE"){
        e.target.textContent = "START";
        window.clearInterval(curInterval);
        return;
    }
    curInterval = window.setInterval(()=> {
        count ++
    }, 10)
    e.target.textContent = "PAUSE";
});

resetBtn.addEventListener("click", () => {
    clearInterval(curInterval);
    count = 0;
    startBtn.textContent = "START"
    recordContainer.innerHTML = "" ;
}) 

