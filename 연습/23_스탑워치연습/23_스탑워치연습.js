const display = document.querySelector("#display");
const list = document.querySelectorAll("#display > span");
let curInterval;

const startBtn = document.querySelector("#startBtn");
const recordBtn = document.querySelector("#recordBtn");
const resetBtn = document.querySelector("#resetBtn");

let count = 0;

startBtn.addEventListener("click", (e) => {
    if (e.target.textContent === "PAUSE") {
        e.target.textContent = "START";
        window.clearInterval(curInterval);
        return;
    }

    curInterval = window.setInterval(() => {
        count++;
        output();
    }, 10);

    e.target.textContent = "PAUSE";
});

function attachZero(num) {
    if (num < 10) {
        return "0" + num;
    }
    return "" + num;
}

function output() {
    let minute = Math.floor(count / 100 / 60);
    let second = Math.floor(count / 100 % 60);
    let mSecond = Math.floor(count % 100);

    minute = attachZero(minute);
    second = attachZero(second);
    mSecond = attachZero(mSecond);

    if (list[0].innerText !== minute) list[0].innerText = minute;
    if (list[1].innerText !== second) list[1].innerText = second;
    list[2].innerText = mSecond;
}

resetBtn.addEventListener("click", () => {
    window.clearInterval(curInterval);
    count = 0;
    output();
    startBtn.textContent = "START";
    recordContainer.innerHTML = "";
});

recordBtn.addEventListener("click", () => {
    const li = document.createElement("li");
    li.innerText = display.innerText;
    recordContainer.prepend(li);
});
