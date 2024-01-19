// 시작

function createTable(){
    // html 요소에 접근
    const start = Number(document.getElementById("start").value);
    const end = Number(document.getElementById("end").value);
    const theadRow = document.getElementById("thead-row");
    const tbody = document.getElementById("tbody");
    
    //기존 테이블 내용 지우기
    theadRow.innerHTML = "" ;
    tbody.innerHTML = "<tr>" ;
    // 테이블 제목 생성
    let theadContent = "" ;
    for (let theadContent = start ; theadContent <+ end ; theadContent ++){
        // 각 단에 해당하는 제목을 추가
        theadContent += `<th>${theadContent}단</th>`
    }
    theadRow.innerHTML = theadContent

    // 테이블 몸통 생성
    let tbodyContent = "";
    // 가로줄 만들기(1단 ~ 9단)
    for(let row = 1 ; row < 10 ; row ++){
        tbodyContent += `<tr>` ;
        for(let dan = start ; dan <= end ; dan ++){
            tbodyContent += `<td>${dan} x ${row} = ${dan*row}</td>`
        }
        tbodyContent += `</tr>`
    }
    tbody.innerHTML = tbodyContent ;
    }

