document.getElementById('btn3').addEventListener('click', () => {
    const containers = document.querySelectorAll('.container3 div');

    containers.forEach((container, index) => {
        const input = container.querySelector('input');
        const box = container.querySelector('.box3');

        const color = input.value;
        box.style.backgroundColor = color;
    });
});
