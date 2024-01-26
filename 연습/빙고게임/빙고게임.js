function shuffleArray(array) {
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        }

        function generateBingoBoard() {
            const rowCount = Number(document.getElementById('rowCount').value) || 5;
            const winCount = Number(document.getElementById('winCount').value) || 3;
            const bingoBoardContainer = document.getElementById('bingoBoardContainer');
            bingoBoardContainer.innerHTML = '';

            const currentBingoCount = document.getElementById('currentBingoCount');
            currentBingoCount.innerText = '현재 빙고 수: 0';

            const numbers = Array.from({ length: rowCount * rowCount }, (_, index) => index + 1);
            shuffleArray(numbers);

            for (let i = 0; i < rowCount; i++) {
                for (let j = 0; j < rowCount; j++) {
                    const box = document.createElement('div');
                    box.classList.add('box');
                    box.innerText = numbers[i * rowCount + j];

                    // 각 박스에 클릭 이벤트 추가
                    box.addEventListener('click', function() {
                        handleClick(box, rowCount, winCount, currentBingoCount);
                    });

                    bingoBoardContainer.appendChild(box);
                }
                bingoBoardContainer.appendChild(document.createElement('br'));
            }
        }

        function handleClick(box, rowCount, winCount, currentBingoCount) {
            // 박스에 .checked 클래스 추가하고 배경색 변경
            box.classList.add('checked');
            box.style.backgroundColor = 'orange';

            // 빙고 체크
            checkBingo(box, rowCount, winCount, currentBingoCount);
        }

function checkBingo(box, rowCount, winCount, currentBingoCount) {
    const boxes = document.querySelectorAll('.box');
    const index = Array.from(boxes).indexOf(box);
    const row = Math.floor(index / rowCount);
    const col = index % rowCount;

    // 가로, 세로, 대각선 체크
    let horizontalCount = 0;
    let verticalCount = 0;
    let diagonalCount1 = 0;
    let diagonalCount2 = 0;

    for (let i = 0; i < rowCount; i++) {
        if (boxes[row * rowCount + i].classList.contains('checked')) {
            horizontalCount++;
        }

        if (boxes[i * rowCount + col].classList.contains('checked')) {
            verticalCount++;
        }

        if (boxes[i * rowCount + i].classList.contains('checked')) {
            diagonalCount1++;
        }

        if (boxes[i * rowCount + (rowCount - 1 - i)].classList.contains('checked')) {
            diagonalCount2++;
        }
    }

    // 빙고가 완성되면 빙고 수 증가 및 표시 업데이트
    if (horizontalCount === rowCount || verticalCount === rowCount || diagonalCount1 === rowCount || diagonalCount2 === rowCount) {
        const currentBingo = parseInt(currentBingoCount.innerText.split(' ')[3]) + 1;
        currentBingoCount.innerText = `현재 빙고 수: ${currentBingo}`;

        // 이겼을 때 처리
        if (currentBingo === winCount) {
            alert("이겼습니다!");
            // 빙고 판 지우기
            const bingoBoardContainer = document.getElementById('bingoBoardContainer');
            bingoBoardContainer.innerHTML = '';
        }
    }
}
