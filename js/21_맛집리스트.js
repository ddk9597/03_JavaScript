/* Restaurant 생성자 함수 */
// 생성자함수는 대문자로 시작한다

function Restaurant(resName, resAddress, resMenu){ //Restaurant 라는 함수 생성
    
    // 생성자함수 안에서 this == 만들어지는 객체 자체

    // 속성(변수, 필드)
    this.resName = resName;
    this.resAddress = resAddress ; 
    
    // 메뉴("메뉴1, 메뉴2, 메뉴" -> 배열)
    /* 문자열.split("구분자") */
    // -> 문자열을 "구분자"로 쪼개서 배열로 반환
    this.resMenu = resMenu.split(", "); // ,과 띄어쓰기를 기준으로 나눈다

    // 기능(메서드)
    this.information = function(){

        return `${this.resName} / ${this.resAddress} / ${this.resMenu}`;
    }

}

const resList = [];

// 샘플 식당 데이터 추가
resList.push(new Restaurant("김밥천국", "김밥, 라면", "서울시 중구 어딘가"));
resList.push(new Restaurant("왕가탕후루", "샤인머스켓, 딸기, 통귤", "서울시 서대문구"));


/* 화면에 존재하는 요소들 얻어오기(button, input) */
const resName = document.querySelector("#resName");
const resAddress = document.querySelector("#resAddress");
const resMenu = document.querySelector("#resMenu");
const addBtn = document.querySelector("#addBtn");
const selectBtn = document.querySelector("#selectBtn");

/* addBtn 클릭 시 input에 입력된 값을 모두 얻어와 resList에 추가 */
addBtn.addEventListener("click", () => {


    /* 유효성 검사 */
    // -> 전달된 데이터가 형식, 크기, 작성법 등이 맞는지 검사
    // ex) 입력된 값이 없을 경우
    //     비밀번호 형식 맞지 않을경우
    //     입력된 값의 범위가 옳지 않은경우

    // 빈칸 검사(입력된 값이 없으면 추가를 못한다)
    if(resName.value.trim().length == 0){
        alert("식당명을 입력해주세요")
        resName.focus();
        return ;
    }
    if(resAddress.value.trim().length == 0){
        alert("주소를 입력해주세요")
        resAddress.focus();
        return ;
    }
    if(resMenu.value.trim().length == 0){
        alert("메뉴를 입력해주세요")
        resMenu.focus();
        return ;
    }


    // resList에 식당 객체 추가
     resList.push(new Restaurant(resName.value, 
                                 resAddress.value, 
                                 resMenu.value) );

// 이전 input에 작성된 내용삭제
    resName.value = "";
    resAddress.value = "";
    resMenu.value = "";

    alert("추가 성공");

    // 가게명 input 요소에 focus 맞추기

    resName.focus();
});

/* 
    조회버튼 클릭 시 #printList의 이전 내용 모두 삭제
    resList의 요소를 이용해 li요소를 만들어 추가
*/

const printList = document.querySelector("#printList");

selectBtn.addEventListener("click", () => {

    // 이전 내용 모두 삭제
    printList.innerHTML = "";

    // li 요소를 만들어 추가
    for(i = 0 ; i < resList.length ; i ++){
        // resList[i]

        // li 요소 만들기
        const li = document.createElement("li");

        // 만들어진 li의 내용으로 
        // resList[i]의 information()메서드 반환 값 대입
        li.innerText = resList[i].information();

        // li 요소를 #printList의 마지막 자식으로 추가
        printList.append(li);
    }

    // 출력

});



