// Creating the grid
const container = document.querySelector('.container');
const grid = document.createElement('div');
const body = document.createElement('div');
const sidebar = document.createElement('div'); //Create sidebar for erasing, changing colors, clearing, etc
const clear = document.createElement('button');
body.classList.add('body');
grid.classList.add('grid');
sidebar.classList.add('sidebar'); 
clear.classList.add('clear');
clear.textContent = 'Clear';

function newGrid() { //Creates a grid with size based on user input
    numBoxes = parseInt(prompt ("Enter grid width in # of boxes"));
    totalBoxes = numBoxes * numBoxes;
    grid.style.gridTemplateColumns = "repeat("+numBoxes+", 1fr)";
    grid.style.gridTemplateRows = "repeat("+numBoxes+", 1fr)";
    for (i=0; i<totalBoxes; i++) { 
        createDivs(); 
    }
    
}

function createDivs() { //Creates grid items based on user input
    let div = document.createElement('div');
    grid.appendChild(div);
    div.classList.add('box');
    
}

newGrid();
sidebar.appendChild(clear);
body.appendChild(sidebar);
body.appendChild(grid);
container.appendChild(body);

const gridItems = document.querySelectorAll('.box');
for (let gridItem of gridItems) {
    gridItem.addEventListener('mouseover', function () { //Colors the grid items on mouseover
        gridItem.style.background = 'purple';
    }
)}

clear.addEventListener('click', () => { //Clears the grid
    gridItems.forEach(gridItem => {
        gridItem.style.background = 'white';
    })
})

