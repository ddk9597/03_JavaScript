// 키 얻어오기
const keys = document.getElementsByClassName("key");
let idx; // index value storage

// 문서 전체에서 키가 눌러지는 것을 감지
document.addEventListener("keydown", function (e) {
    switch (e.key.toLowerCase()) {
        case 'q': idx = 0; break;
        case 'w': idx = 1; break;
        case 'e': idx = 2; break;
        case 'r': idx = 3; break;
        default: return; // 함수 종료
    }

    keys[idx].style.backgroundColor = "blue";
});

/* 화면 전체에서 키를 뗀 경우 배경색을 흰색으로 */
document.addEventListener("keyup", function (e) {
    switch (e.key.toLowerCase()) {
        case 'q': idx = 0; break;
        case 'w': idx = 1; break;
        case 'e': idx = 2; break;
        case 'r': idx = 3; break;
        default: return;
    }
    keys[idx].style.backgroundColor = "white";
});
