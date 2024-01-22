// 값 불러오기

function readValue(){
    const ground = document.querySelector("#chatting-bg"); // 배경
    const input = document.querySelector("#user-input"); // 입력 칸
    const button = document.querySelector("#button"); // 전송버튼

    // 입력된 값이 없을 경우
    // 1) 진짜 안적음
    // 2) 빈칸만 적음

    // trim 좌우 공백을 제거
    
    if(input.value.trim().length == 0){ //공백만 적은 경우
        alert("채팅 내용을 입력해 주세요");
        input.value = ""; // 이전 내용 삭제
        input.focus() ;
        return;
    }
        
    
    // 채팅 출력
    ground.innerHTML += `<p><span>${input.value}</span></p>`;

    // 스크롤 늘리기
    ground.scrollTop = ground.scrollHeight;

    // 채팅 보내고 입력 칸 비우고 커서이동
    input.value = ""; // 입력 칸 비우기
    input.focus() ; // 커서 이동

    // 엔터키로 채팅 보내기
    document.addEventListener("keyup", (e)=>{

        if(e.key == "Enter"){
            readValue();    
        }
        
    });
}

    
