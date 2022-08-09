// Creating the grid
const container = document.querySelector('.container');
const grid = document.createElement('div');
const body = document.createElement('div');
const sidebar = document.createElement('div'); //Create sidebar for erasing, changing colors, clearing, etc
const clear = document.createElement('button');
const eraser = document.createElement('button');
const newGrid = document.createElement('button');
const header = document.querySelector('h1');
let color = document.createElement('input');
color.type = 'color';
color.setAttribute('id', 'color');
//let color = document.getElementById('color');
let colorSelection;

body.classList.add('body');
grid.classList.add('grid');
sidebar.classList.add('sidebar'); 
clear.classList.add('clear');
clear.textContent = 'Clear';
newGrid.classList.add('newGrid');
newGrid.textContent = 'New';
eraser.classList.add('eraser');
eraser.textContent = 'Eraser';

makeGrid();
sidebar.appendChild(color);
sidebar.appendChild(newGrid);
sidebar.appendChild(eraser);
sidebar.appendChild(clear);
body.appendChild(sidebar);
body.appendChild(grid);
container.appendChild(body);

clear.addEventListener('click', () => { //Clears the grid
    clearGrid();
})

newGrid.addEventListener('click', () => { //Clears grid then makes a new one based on size inputted by user
    makeGrid();
    clearGrid();
})

eraser.addEventListener('click', () => { //Erases individual grid items
    eraser.classList.add('selected');
    eraseGridItems();
})

const gridItems = document.querySelectorAll('.box');
    colorSelection = 'black';
    color.addEventListener('change', (e) => {
        colorSelection = e.target.value;
    })
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', function () { //Colors the grid items on mouseover
            gridItem.style.background = colorSelection;
        }
    )}

function colorGrid () { //Colors each div when mouse passes over
    const gridItems = document.querySelectorAll('.box');
    color.addEventListener('change', (e) => {
        colorSelection = e.target.value;
    })
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', function () { //Colors the grid items on mouseover
            gridItem.style.background = colorSelection;
        }
    )}
}

function eraseGridItems () {
    const gridItems = document.querySelectorAll('.box');
    for (let gridItem of gridItems) {
        gridItem.addEventListener('mouseover', function () { //Colors the grid items on mouseover
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
    colorGrid();
}

function createDivs() { //Creates grid items based on user input
    let div = document.createElement('div');
    grid.appendChild(div);
    div.classList.add('box');
}
