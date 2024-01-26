/* head - clickMutual, inputMutual, displayMutual */
// 객체 불러오기
const inputMutual = document.querySelector("#inputMutual");
const displayMutual = document.querySelector("#displayMutual");
const clickMutual = document.querySelector("#clickMutual");

/* clickMutual 클릭 시 inputMutual, displayMutual의 클래스 변경 */
// 클릭 이벤트 감지 및 기능 설정
clickMutual.addEventListener("click", ()=> {
    // 1. inputMutual에 "disNone" 클래스 제거
    inputMutual.classList.remove("disNone");
    // 2. displayMutual에서 "disNone" 클래스 추가
    displayMutual.classList.add("disNone");
});

// inputMutual의 blur 이벤트가 발생할 때 classList 수정
inputMutual.addEventListener("blur", () => {
    // 1. displayMutual의 내부 텍스트 설정 
    displayMutual.innerText = inputMutual.value;
    // 2. inputMutual에 "disNone" 클래스 추가
    inputMutual.classList.add("disNone");
    // 3. displayMutual에서 "disNone" 클래스 제거
    displayMutual.classList.remove("disNone");
});

/* 버튼 설정 */ 
// 버튼 그룹1
const btnSquad1 = document.querySelectorAll(".btnSquad1");

// 추가, 삭제, 종료, 수정 버튼
const addMenu = document.querySelector("#addMenu");
const deleteMenu = document.querySelector("#deleteMenu");
const completeMenuChange = document.querySelector("#completeMenuChange");
const startMenuChange = document.querySelector("#startMenuChange");

/* 클릭 이벤트 추가 */

// 추가 버튼
addMenu.addEventListener("click", () => {
    // menuList 내부에 추가될 요소 생성
    const addedMenuGroup = document.createElement("div");
    addedMenuGroup.classList.add("addedMenuGroup", "menuSquad");
    addedMenuGroup.id = "added";

    // 체크박스 생성
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("menuSquad");

    // 가짜스팬 생성
    const fakeSpan = document.createElement("span");
    fakeSpan.classList.add("menuSquadContent", "disNone");

    // 메뉴명 입력란 생성
    const menuNameInput = document.createElement("input");
    menuNameInput.type = "text";
    menuNameInput.classList.add("menuSquad");
    menuNameInput.placeholder = "메뉴명을 입력하세요";

    // 메뉴명 텍스트 생성
    const menuNameContent = document.createElement("span");
    menuNameContent.classList.add("menuSquadContent", "disNone");

    // 가격 입력란 생성
    const priceInput = document.createElement("input");
    priceInput.type = "text";
    priceInput.classList.add("menuSquad");
    priceInput.placeholder = "가격을 입력하세요";

    // 가격 텍스트 생성
    const priceContent = document.createElement("span");
    priceContent.classList.add("menuSquadContent", "disNone");
    priceContent.innerText = "원";

    // 생성된 요소들을 추가 요소에 추가
    addedMenuGroup.appendChild(checkbox);
    addedMenuGroup.appendChild(fakeSpan);
    addedMenuGroup.appendChild(menuNameInput);
    addedMenuGroup.appendChild(menuNameContent);
    addedMenuGroup.appendChild(priceInput);
    addedMenuGroup.appendChild(priceContent);

    // menuList에 추가 요소를 추가
    document.querySelector(".menuList").appendChild(addedMenuGroup);
});



/// 삭제 버튼
deleteMenu.addEventListener("click", () => {
    // checked된 체크박스를 찾아서 삭제
    const checkedCheckboxes = document.querySelectorAll('.menuList .addedMenuGroup input[type="checkbox"]:checked');

    checkedCheckboxes.forEach(checkbox => {
        // 체크된 체크박스의 부모 요소인 addedMenuGroup 삭제
        const addedMenuGroup = checkbox.closest('.addedMenuGroup');
        addedMenuGroup.remove();
    });
});


/* 종료 버튼, 수정버튼*/
// 공통 변수 선언

completeMenuChange.addEventListener("click", () => {
    // 버튼 그룹1의 각 요소에 "disNone" 클래스 추가
    btnSquad1.forEach(btn => {
        btn.classList.add("disNone");
    });

    // 수정버튼에 disNone 클래스 제거
    startMenuChange.classList.remove("disNone");

    // 변수 선언 피조물((생성되는 input, span 태그))
    const addedMenuGroups = document.querySelectorAll(".addedMenuGroup"); // 피조물 묶음

    addedMenuGroups.forEach(addedMenuGroup => {
        const inputGroup = addedMenuGroup.querySelectorAll("input"); // 피생성 인풋
        const contentGroup = addedMenuGroup.querySelectorAll("span"); // 피생성 스팬

        // 스팬텍스트=인풋value (인풋의 0번째는 체크박스이므로 제외)
        for (let i = 1; i < inputGroup.length; i++) {
            contentGroup[i-1].innerText = inputGroup[i].value;
        }

        // 생성된 input 태그에 클래스 disNone 추가
        inputGroup.forEach(input => {
            input.classList.add("disNone");
        });

        // menuSquadContent 에 클래스 disNone 제거
        contentGroup.forEach(content => {
            content.classList.remove("disNone");
        });
    });

    
});

// 수정 버튼
startMenuChange.addEventListener("click", () => {
    // 버튼 그룹1의 각 요소에 "disNone" 클래스 제거
    btnSquad1.forEach(btn => {
        btn.classList.remove("disNone");
    });
    // 자신에게 "disNone" 클래스 추가
    startMenuChange.classList.add("disNone");

    // 수정 버튼을 클릭할 때 추가된 동작
    // 생성된 input에 classList.remove("disNone") 추가
    // 생성된 span에 classList.add("disNone") 추가
    const addedMenuGroups = document.querySelectorAll(".addedMenuGroup"); // 피조물 묶음
    addedMenuGroups.forEach(addedMenuGroup => {
        const inputGroup = addedMenuGroup.querySelectorAll("input"); // 피생성 인풋
        const contentGroup = addedMenuGroup.querySelectorAll("span"); // 피생성 스팬

        // 생성된 input 태그에 클래스 disNone 제거
        inputGroup.forEach(input => {
            input.classList.remove("disNone");
        });

        // 생성된 span 태그에 클래스 disNone 추가
        contentGroup.forEach(content => {
            content.classList.add("disNone");
        });
    });
});