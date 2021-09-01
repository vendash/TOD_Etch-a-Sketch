const grid = document.querySelector('#grid');
const generateButton = document.querySelector('#generateButton');
const resetButton = document.querySelector('#resetButton');
const gridSizeInput = document.querySelector('#gridSize');
const grayscaleRadioBtn = document.querySelector('#grayscale');
const randomColorRadioBtn = document.querySelector('#randomColor')
const mintGridSize = 4;
const maxGridSize = 64;

let gridSize = parseInt(gridSizeInput.value);
let colorArray = [];

function generateGrid(gridSize) {
    grid.innerHTML = '';
    grid.style.gridTemplateColumns = `repeat(${gridSize}, 1fr)`;

    resetColorArray();

    for (let i = 0; i<gridSize*gridSize; i++) {
        const div = document.createElement('div');
        div.classList.add('blue');
        div.setAttribute('data-value', i);
        div.style.backgroundColor = getHslColor(i);
        grid.appendChild(div);
        div.addEventListener('mouseenter', changeColor);
    }
}

function resetColorArray() {
    colorArray = [];
    for (let i = 0; i<gridSize*gridSize; i++) {
        colorArray[i] = colorArray[i] = [0,0,100];
    }
}


function getHslColor(itemId) {
    return `hsl(${colorArray[itemId][0]}, ${colorArray[itemId][1]}%, ${colorArray[itemId][2]}%)`
}

function changeColor(e) {
    const itemId = e.target.dataset.value
    if (grayscaleRadioBtn.checked === true) {
        if (colorArray[itemId][2]>=10) {
            colorArray[itemId][2] = colorArray[itemId][2] -10;
        } else {
            colorArray[itemId][2] = 0;
        }
    }
    if (randomColorRadioBtn.checked === true) {
        colorArray[itemId][0] = Math.floor(Math.random()*360 +1);
        colorArray[itemId][1] = Math.floor(Math.random()*100 +1);
        colorArray[itemId][2] = Math.floor(Math.random()*100 +1);       
    }
    e.target.style.backgroundColor = getHslColor(itemId);
}

resetButton.addEventListener('click', () => {

    generateGrid(gridSize);
});

generateButton.addEventListener('click', () => {
    gridSize = parseInt(gridSizeInput.value);

    if (gridSize > maxGridSize) {
        gridSize = maxGridSize;
        gridSizeInput.value = gridSize;
    }
    if (gridSize < mintGridSize) {
        gridSize = mintGridSize;
        gridSizeInput.value = gridSize;
    }

    generateGrid(gridSize);
}); 

generateGrid(gridSize);