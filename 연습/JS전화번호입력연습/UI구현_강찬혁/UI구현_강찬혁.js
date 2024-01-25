/* 입력표시판에 숫자 누적 */
function addNumber(number) {
    const inputElement = document.getElementById('phoneNumberInput');
    inputElement.value += number;
}

/* 초기화버튼 기능*/
function resetInput() {
    document.getElementById('phoneNumberInput').value = '';
}

/* 추가버튼 기능 */
function addPhoneNumber() {
    const inputElement = document.getElementById('phoneNumberInput');
    // 공백 없앰
    const inputValue = inputElement.value.trim();

    if (inputValue !== '') { // 공백 제외, 입력한 버튼이 하나라도 있다면 작동

        // 지역변수 - 전화번호 목록
        const listElement = document.getElementById('phoneNumberList');

        // 지역변수 - 전화번호 목록에 li 태그로 추가
        const addList = document.createElement('li');

        // 생성된 li 태그에 클래스  (css)
        addList.classList.add('phoneNumberItem');

        // 생성된 li 태그의 텍스트를 번호 입력란에 입력된 값으로 함
        addList.textContent = inputValue;

        /* 즐찾버튼 생성 */
        const starBtn = document.createElement('button');
        // 클래스 추가
        starBtn.classList.add("addedButton")
        // 별표시 생성 및 토글 설정
        starBtn.textContent = '☆';
        starBtn.onclick = function() {
            toggleFavorite(addList, starBtn);
        };

        // 삭제버튼 생성, 클래스 추가
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("addedButton")
        deleteBtn.textContent = '×';
        deleteBtn.onclick = function() {
            deletePhoneNumber(addList);
        };

        // 생성된 버튼들, 목록에 추가 후 목록을 전화번호 목록에 추가
        addList.appendChild(starBtn);
        addList.appendChild(deleteBtn);
        listElement.appendChild(addList);

        // 추가 후 입력된 번호 지움
        inputElement.value = '';
    }
}
// 삭제버튼 기능 설정
function deletePhoneNumber(item) {
    item.remove();
}

/* 즐겨찾기 토글 기능 설정 */
function toggleFavorite(item, button) {
    if (button.textContent === '☆') {
        button.textContent = '★';
        button.style.color = 'orange';
        item.style.color = 'red';
        item.classList.add('favorite');
    } else {
        button.textContent = '☆';
        button.style.color = '';
        item.style.color = '';
        item.classList.remove('favorite');
    }
}
