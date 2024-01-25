    /* 전역변수 설정 */




    /* 입력표시판에 숫자 누적 */
    function accumulateNumber(number) {
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
        const inputValue = inputElement.value.trim();

        if (inputValue !== '') { // 입력한 버튼이 하나라도 있다면 작동
            const listElement = document.getElementById('phoneNumberList');
            const listItem = document.createElement('li');
            listItem.classList.add('phoneNumberItem');
            listItem.textContent = inputValue;

            // 즐찾버튼 생성
            const favoriteButton = document.createElement('button');
            favoriteButton.classList.add("addedButton")
            favoriteButton.textContent = '☆';
            favoriteButton.onclick = function() {
                toggleFavorite(listItem, favoriteButton);
            };

            // 삭제버튼 생성
            const deleteButton = document.createElement('button');
            deleteButton.classList.add("addedButton")
            deleteButton.textContent = 'x';
            deleteButton.onclick = function() {
                deletePhoneNumber(listItem);
            };

            // 생성된 버튼 목록에 추가 후 목록을 전화번호 목록에 추가
            listItem.appendChild(favoriteButton);
            listItem.appendChild(deleteButton);
            listElement.appendChild(listItem);

            // 추가 후 입력된 번호 지움
            inputElement.value = '';
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
