/* 입력표시판에 숫자 누적 */
function addNumber(number) {
    const inputElement = document.getElementById('phoneNumberInput');
    const currentValue = inputElement.value;

    // 숫자를 누적하고 trim()을 적용
    inputElement.value = (currentValue + number).trim();

    // 전화번호 형식으로 포맷팅
    formatPhoneNumber();
}

/* 전화번호 형식으로 포맷팅 */
function formatPhoneNumber() {
    const inputElement = document.getElementById('phoneNumberInput');
    let formattedNumber = inputElement.value.replace(/[^0-9]/g, ''); // 숫자 이외의 문자 제거

    if (formattedNumber.length >= 3) {
        formattedNumber = `${formattedNumber.slice(0, 3)}-${formattedNumber.slice(3)}`;
    }
    if (formattedNumber.length >= 8) {
        formattedNumber = `${formattedNumber.slice(0, 8)}-${formattedNumber.slice(8)}`;
    }

    inputElement.value = formattedNumber;
}

/* 초기화버튼 기능*/
function resetInput() {
    document.getElementById('phoneNumberInput').value = '';
}

/* 추가버튼 기능 */
function addPhoneNumber() {
    const inputElement = document.getElementById('phoneNumberInput');
    const inputValue = inputElement.value;

    if (inputValue !== '') { // 입력한 버튼이 하나라도 있다면 작동
        const listElement = document.getElementById('phoneNumberList');
        const listItem = document.createElement('li');
        listItem.classList.add('phoneNumberItem');
        listItem.textContent = inputValue;

        // 즐찾버튼 생성
        const starBtn = document.createElement('button');
        starBtn.classList.add("addedButton")
        starBtn.textContent = '☆';
        starBtn.onclick = function() {
            toggleFavorite(listItem, starBtn);
        };

        // 삭제버튼 생성
        const deleteBtn = document.createElement('button');
        deleteBtn.classList.add("addedButton")
        deleteBtn.textContent = '×';
        deleteBtn.onclick = function() {
            deletePhoneNumber(listItem);
        };

        // 생성된 버튼 목록에 추가 후 목록을 전화번호 목록에 추가
        listItem.appendChild(starBtn);
        listItem.appendChild(deleteBtn);
        listElement.appendChild(listItem);

        // 추가 후 입력된 번호 지움
        resetInput();
    }
}

// 삭제버튼 기능
function deletePhoneNumber(item) {
    item.remove();
}

/* 즐겨찾기 토글 설정 */
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


/* 키보드 입력 감지 */
document.addEventListener('keydown', handleKeyPress);

const handleKeyPress = (event) => {
    const keyPressed = event.key;
    // 숫자 또는 *, # 키를 눌렀을 때만 숫자 입력 함수 호출
    if (isNumberKey(keyPressed)) {
        addNumber(keyPressed);
    }
};

/* 숫자 및 *, # 키 여부 확인 */
function isNumberKey(key) {
    return !isNaN(key) || ['*', '#'].includes(key);
}
