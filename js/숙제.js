    const currentBalance = 10000;
    const transactionHistory = [];
    const password = '1234';

    function updateBalance() {
        document.getElementById("currentBalance").innerText = currentBalance + " 원";
    }

    function updateTransactionHistory() {
        var historyList = document.getElementById("historyList");
        historyList.innerHTML = "";
        for (var i = 0; i < transactionHistory.length; i++) {
            var listItem = document.createElement("li");
            listItem.textContent = transactionHistory[i];
            historyList.appendChild(listItem);
        }
    }

    function deposit() {
        var amount = parseInt(document.getElementById("transactionAmount").value);
        if (!isNaN(amount) && amount > 0) {
            currentBalance += amount;
            transactionHistory.push("입금: +" + amount + " 원");
            updateBalance();
            updateTransactionHistory();
            alert('입금되었습니다.');
        } else {
            alert('올바른 금액을 입력하세요.');
        }
    }

    function withdraw() {
        var amount = parseInt(document.getElementById("transactionAmount").value);

        // 비밀번호 확인 로직
        var enteredPassword = prompt('비밀번호를 입력하세요');

        if (enteredPassword === null) {
            // 취소 버튼 클릭
            alert('취소');
        } else if (enteredPassword === password) {
            // 비밀번호 일치
            if (!isNaN(amount) && amount > 0 && amount <= currentBalance) {
                currentBalance -= amount;
                transactionHistory.push("출금: -" + amount + " 원");
                updateBalance();
                updateTransactionHistory();
                alert('출금되었습니다.');
            } else {
                alert('출금할 수 없습니다. 잔액이 부족하거나 올바른 금액을 입력하세요.');
            }
        } else {
            // 비밀번호 불일치
            alert('비밀번호가 일치하지 않습니다.');
        }
    }