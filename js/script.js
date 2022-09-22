// Creating the webpage
const container = document.querySelector('.container');
const grid = document.createElement('div');
const body = document.createElement('div');
const sidebar = document.createElement('div'); //Create sidebar for erasing, changing colors, clearing, etc
const clear = document.createElement('button');
const eraser = document.createElement('button');
const color = document.createElement('button');
const random = document.createElement('button');
const shade = document.createElement('button');
const newGrid = document.createElement('button');
const header = document.querySelector('h1');
let colorSelector = document.createElement('input');
colorSelector.type = 'color';
colorSelector.setAttribute('id', 'colorSelector');
let colorSelection;
let shadeColor;

body.classList.add('body');
grid.classList.add('grid');
sidebar.classList.add('sidebar'); 
clear.classList.add('clear');
clear.textContent = 'Clear';
newGrid.classList.add('newGrid');
newGrid.textContent = 'New';
eraser.classList.add('eraser');
eraser.textContent = 'Eraser';
color.classList.add('color');
color.textContent = 'Color';
random.classList.add('random');
random.textContent = 'Random';
shade.classList.add('shade');
shade.textContent = 'Shade';

sidebar.appendChild(colorSelector);
sidebar.appendChild(color);
sidebar.appendChild(random);
sidebar.appendChild(shade);
sidebar.appendChild(eraser);
sidebar.appendChild(clear);
sidebar.appendChild(newGrid);
body.appendChild(sidebar);
body.appendChild(grid);
container.appendChild(body);
makeGrid();

clear.addEventListener('click', () => { //Clears the grid
    clearGrid();
})

newGrid.addEventListener('click', () => { //Clears grid then makes a new one based on size inputted by user
    makeGrid();
    colorGrid();
    clearGrid();
})

eraser.addEventListener('click', () => { //Erases individual grid items
    shade.classList.remove('selected');
    color.classList.remove('selected');
    random.classList.remove('selected');
    eraser.classList.add('selected');
    eraseGridItems();
})

color.addEventListener('click', () => {
    shade.classList.remove('selected');
    eraser.classList.remove('selected');
    random.classList.remove('selected');
    color.classList.add('selected');
    colorGrid();
})

random.addEventListener('click', () => {
    shade.classList.remove('selected');
    eraser.classList.remove('selected');
    color.classList.remove('selected');
    random.classList.add('selected');
    randomColorGrid();
})

shade.addEventListener('click', () => {
    eraser.classList.remove('selected');
    color.classList.remove('selected');
    random.classList.remove('selected');
    shade.classList.add('selected');
    shadeGrid();
})

const gridItems = document.querySelectorAll('.box');
    color.classList.add('selected');
    colorSelection = 'black';
    colorSelector.addEventListener('change', (e) => {
        colorSelection = e.target.value;
    })
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', function () { //Colors the grid items on mouseover
            gridItem.style.background = colorSelection;
        }
    )}

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let colorRgb = '#';
    for (let i = 0; i < 6; i++) {
        colorRgb += letters[Math.floor(Math.random() * 16)];
    }
    return colorRgb;
}

function randomColorGrid () {
    const gridItems = document.querySelectorAll('.box');
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', function () { //Colors the grid items on mouseover
            gridItem.style.background = getRandomColor();
        }
    )}
}

function shadeGrid () {
    const gridItems = document.querySelectorAll('.box');
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', () => {
            let rbgPercent = parseInt(gridItem.dataset.percent);
            if (isNaN(rbgPercent)) rbgPercent = 100;
            if (rbgPercent >= 10) {
                rbgPercent -= 10;
                gridItem.dataset.percent = rbgPercent;
            }
            let rbgValue = `rgb(${rbgPercent}%,${rbgPercent}%,${rbgPercent}%)`;
            if (gridItem !== gridItems) {
                gridItem.style.background = rbgValue;
            }
        }) 
    }
}


function colorGrid () { //Colors each div when mouse passes over
    const gridItems = document.querySelectorAll('.box');
    colorSelector.addEventListener('change', (e) => {
        colorSelection = e.target.value;
    })
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', function () { 
            gridItem.style.background = colorSelection;
        }
    )}
}

function eraseGridItems () { //Erases grid when mouse passes over
    const gridItems = document.querySelectorAll('.box');
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', function () { 
            gridItem.style.background = 'white';
        }
    )}
}

function clearGrid() { //Clears the current grid
    const gridItems = document.querySelectorAll('.box');
    gridItems.forEach(gridItem => {
        gridItem.style.background = 'white';
    })
}

function makeGrid() { //Creates a grid with the size based on user input
    numBoxes = parseInt(prompt ("Enter grid width in # of boxes (cannot exceed 64)"));
    while (numBoxes > 64) {
        numBoxes = parseInt(prompt ("Too large a number. Enter a grid width of 64 or lower"));
    }
    totalBoxes = numBoxes * numBoxes;
    grid.style.gridTemplateColumns = "repeat("+numBoxes+", 1fr)";
    grid.style.gridTemplateRows = "repeat("+numBoxes+", 1fr)";
    for (i=0; i<totalBoxes; i++) { 
        createDivs(); 
    }
}

function createDivs() { 
    let div = document.createElement('div');
    grid.appendChild(div);
    div.classList.add('box');
}