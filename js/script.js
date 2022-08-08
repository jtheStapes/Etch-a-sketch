// Creating the grid
const container = document.querySelector('.container');
const grid = document.createElement('div');
grid.classList.add('grid');

function newGrid() {
    numBoxes = parseInt(prompt ("Enter grid width in # of boxes"));
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

container.appendChild(grid);
newGrid();