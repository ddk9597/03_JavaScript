function createTable() {
    // HTML 요소에 접근
    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);
    const theadRow = document.getElementById("thead-row");
    const tbody = document.getElementById("tbody");

    // 기존 테이블 내용 지우기
    theadRow.innerHTML = "";
    tbody.innerHTML = "";

    // 테이블 제목 생성
    let theadContent = "";
    for (let dan = start; dan <= end; dan++) {
        // 각 단에 해당하는 제목을 추가
        theadContent += `<th>${dan} 단</th>`;
    }
    theadRow.innerHTML = theadContent;

    // 테이블 몸통 생성
    let tbodyContent = "";
    for (let num = 1; num <= 9; num++) {
        tbodyContent += "<tr>";
        for (let dan = start; dan <= end; dan++) {
            // 각 셀에 해당하는 곱셈 결과를 추가
            tbodyContent += `<td>${dan} x ${num} = ${dan * num}</td>`;
        }
        tbodyContent += "</tr>";
    }
    tbody.innerHTML = tbodyContent;
    
}
