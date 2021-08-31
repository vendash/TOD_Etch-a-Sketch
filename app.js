const grid = document.querySelector('#square');
grid.style.gridTemplateColumns = "repeat(8, 1fr)";

const colorArray = [];

for (let i = 0; i<64; i++) {
    colorArray[i] = [0,0,100];

    const div = document.createElement('div');
    
    div.classList.add('blue');
    div.setAttribute('data-value', i);
    
    div.style.backgroundColor = `hsl(0, 0%, 100%)`;

    grid.appendChild(div);

    div.addEventListener('mouseenter', changeColor);
}

function changeColor(e) {
    const itemId = e.target.dataset.value
    console.log(colorArray[itemId]);
    if (colorArray[itemId][2]>=10) {
        colorArray[itemId][2] = colorArray[itemId][2] -10;
    }
    let hslColor = `hsl(${colorArray[itemId][0]}, ${colorArray[itemId][1]}%, ${colorArray[itemId][2]}%)`
    console.log(hslColor);
    e.target.style.backgroundColor = hslColor;

}