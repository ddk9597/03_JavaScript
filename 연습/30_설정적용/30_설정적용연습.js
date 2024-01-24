// 30_설정적용연습.js

// 이벤트 리스너 등록
document.addEventListener('input', updateStyles);

// 스타일 업데이트 함수
function updateStyles() {
    const outputBox = document.getElementById('outputBox');
    const setWidth = document.getElementById('setWidth').value;
    const setHeight = document.getElementById('setHeight').value;
    const fontSize = document.getElementById('fontSize').value;
    const fontWeight = document.querySelector('input[name="fontWeight"]:checked')?.value || 'normal';
    const fontColor = document.getElementById('fontColor').value;
    const bgColor = document.getElementById('bgColor').value;
    const rowSet = document.querySelector('input[name="rowSet"]:checked')?.value || 'left';
    const colSet = document.querySelector('input[name="colSet"]:checked')?.value || 'flex-start';
    const outputString = document.getElementById('outputString').value;
    const boxText = document.getElementById("boxText");

    // 스타일 적용
    outputBox.style.width = setWidth + 'px';
    outputBox.style.height = setHeight + 'px';
    boxText.style.fontSize = fontSize + 'px';
    boxText.style.fontWeight = fontWeight;
    outputBox.style.border = `solid 1px ${fontColor}`;
    outputBox.style.backgroundColor = bgColor;
    outputBox.style.color = fontColor;
    outputBox.style.justifyContent = rowSet;
    outputBox.style.alignItems = colSet;
    boxText.innerText = outputString;

    
        

}

console.log(fontSize.value);