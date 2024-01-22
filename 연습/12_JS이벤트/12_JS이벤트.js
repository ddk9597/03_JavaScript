/* 인라인 이벤트 모델 확인하기 */

// 버튼을 누른다 첫번째는 노란색, 다음은 핑크색. 반복하기

function check1(btn){
    console.log(btn);

    // 버튼의 배경색 얻어와 저장하기
    const bgColor = btn.style.backgroundColor ;
    console.log(bgColor); 

    if(bgColor == "yellow"){
        btn.style.backgroundColor = "pink";
    } else{
        btn.style.backgroundColor = "yellow"
    }
}