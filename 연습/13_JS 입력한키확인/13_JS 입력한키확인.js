// 키 얻어오기
const keys = document.getElementsByClassName(".key");

//문서 전체에서 키가 눌러지는 것을 감지
document.addEventListener("keydown", function(e){
    let idx; // index value storage

    switch(e.key.toLowerCase()){
        case'q' : idx = 0 ; break;
        case'w' : idx = 1 ; break;
        case'e' : idx = 2 ; break;
        case'r' : idx = 3 ; break;
    }
})
