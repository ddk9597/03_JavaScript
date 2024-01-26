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

    // 메뉴명 입력란 생성
    const menuNameInput = document.createElement("input");
    menuNameInput.type = "text";
    menuNameInput.classList.add("menuSquad");
    menuNameInput.placeholder = "메뉴명을 입력하세요";

    // 메뉴명 텍스트 생성
    const menuNameContent = document.createElement("span");
    menuNameContent.classList.add("menuSquadConent", "disNone");

    // 가격 입력란 생성
    const priceInput = document.createElement("input");
    priceInput.type = "text";
    priceInput.classList.add("menuSquad");
    priceInput.placeholder = "가격을 입력하세요";

    // 가격 텍스트 생성
    const priceContent = document.createElement("span");
    priceContent.classList.add("menuSquadConent", "disNone");
    priceContent.innerText = "원";

    // 생성된 요소들을 추가 요소에 추가
    addedMenuGroup.appendChild(checkbox);
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


/* 종료 버튼 */

completeMenuChange.addEventListener("click", () => {
    // 버튼 그룹1의 각 요소에 "disNone" 클래스 추가
    btnSquad1.forEach(btn => {
        btn.classList.add("disNone");
    });

    // 수정버튼에 disNone 클래스 제거
    startMenuChange.classList.remove("disNone");

    // 변수 선언
    const addedMenuGroup = document.querySelector(".addedMenuGroup");
    const inputGroup = addedMenuGroup.querySelectorAll("input");
    const contentGroup = addedMenuGroup.querySelectorAll("span");
    const menuSquad = document.querySelectorAll(".menuSquad");
    const menuSquadConent의 = document.querySelectorAll(".menuSquadConent의");

    // menuSquad input 태그에 클래스 disNone 추가
    menuSquad.classList.add("disNone");

    // menuSquadConent의 innerText addedMenuGroup의 value 로 대입
    
    
    
    for (let i = 0; i < inputGroup.length; i++) {
        contentGroup[i].innerText = inputGroup[i+1].value;
    }

    // menuSquadConent 에 클래스 disNone 제거
    const menuSquadConent = document.querySelector(".menuSquadConent");
    menuSquadConent.classList.remove("disNone");



    


});

// 수정 버튼
startMenuChange.addEventListener("click", () => {
    // 버튼 그룹1의 각 요소에 "disNone" 클래스 제거
    btnSquad1.forEach(btn => {
        btn.classList.remove("disNone");
    });
    // 자신에게 "disNone" 클래스 추가
    startMenuChange.classList.add("disNone");
});
