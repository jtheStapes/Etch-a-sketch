// Creating the grid
const container = document.querySelector('.container');

function newGrid() {
    numBoxes = parseInt(prompt ("Enter grid width in # of boxes"));
    totalBoxes = numBoxes * numBoxes;
    container.style.gridTemplateColumns = "repeat("+numBoxes+", 1fr)";
    container.style.gridTemplateRows = "repeat("+numBoxes+", 1fr)";
    for (i=0; i<totalBoxes; i++) { 
        createDivs(); 
    }
}

function createDivs() {
    let div = document.createElement('div');
    container.appendChild(div);
    div.classList.add('box');
}

newGrid();