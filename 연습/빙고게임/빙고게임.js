function shuffleArray(array) {
    // 배열을 랜덤하게 섞어주는 함수
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function generateBingoBoard() {
    // 입력값 가져오기
    // 열 행 수 기본:입력값, 입력값 없다면 : 5
    const rowCount = Number(document.getElementById('rowCount').value) || 5; 
    // 빙고수(승리카운트) 기본:입력값, 입력값 없다면 : 3
    const winCount = Number(document.getElementById('winCount').value) || 3;

    // 빙고 보드 컨테이너 가져오기
    const bingoBoardContainer = document.getElementById('bingoBoardContainer');
    bingoBoardContainer.innerHTML = ''; // 이전에 생성된 빙고 보드를 초기화

    // 현재 빙고 수 표시 영역 가져오기
    const currentBingoCount = document.getElementById('currentBingoCount');

    // 빙고 보드 생성
    const numbers = Array.from({ length: rowCount * rowCount }, (_, index) => index + 1);
    shuffleArray(numbers);

    for (let i = 0; i < rowCount; i++) {
        for (let j = 0; j < rowCount; j++) {
            const box = document.createElement('div');
            box.classList.add('box');
            box.innerText = numbers[i * rowCount + j];
            bingoBoardContainer.appendChild(box);

            // 생성된 박스에 클릭 시 클래스 변경
            box.addEventListener("click", ()=> {
                box.classList.add("checked")
            });
        }
        bingoBoardContainer.appendChild(document.createElement('br'));
    }

    // 현재 빙고 수 초기화
    currentBingoCount.innerText = '현재 빙고 수: 0';
}




/* 가로 세로 빙고 */
// 가로 빙고 카운트 수
let horizonCount = 0;
// 세로 빙고 카운트 수
let verticalCount = 0;
