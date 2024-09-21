document.getElementById('generateColor').addEventListener('click', function() {
    const randomColor = getRandomHexColor();
    document.body.style.backgroundColor = randomColor;
    document.getElementById('colorDisplay').textContent = randomColor;
});

function getRandomHexColor() {
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    return randomColor.padEnd(7, '0'); 
}
