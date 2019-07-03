// 
const createGrid = () => {
    const markup = `
        <div class="container" id="container" style="display: grid;
                                                    border: 5px black solid; 
                                                    margin-left: auto;
                                                    margin-right: auto;
                                                    margin-top: 8vh;
                                                    height: 60vh; 
                                                    width: 60vh">
        </div> `
        document.body.innerHTML += markup
}

const fillGrid = (numRows,numCols) => {
    const container = document.getElementById('container')
    container.style.gridTemplateColumns = `repeat(${numRows}, 1fr)`
    container.style.gridTemplateRows = `repeat(${numCols}, 1fr)`
    let i=0;
    let k=0;
    let blockCount=0;
    for (i=0; i<numRows; i++){
        for(j=0; j<numCols; j++){
            let markup = `<div id="block ${blockCount}" 
                            onmouseover="flipColor(this)"
                            style="grid-row: ${i} /; 
                            grid-column: ${j} /;
                            color: ${'#B1DCBE'};
                            background-color: ${'#B1DCBE'};">${'1'}</div>`
                container.innerHTML += markup
                blockCount++;
        }
    };
}

function resetGrid() {
    // Number of rows and columns is sqrt of total elements in container
    var element = document.getElementById('container');
    var numberOfChildren = element.childElementCount;
    var numRows = Math.sqrt(numberOfChildren);
    var numCols = numRows;
    //

    let i=0;
    let k=0;
    let blockCount=0;
    for(i=0; i<numRows; i++) {
        for(j=0; j<numCols; j++) {
            let currBlock = document.getElementById(`block ${blockCount}`);
            currBlock.style.color = '#B1DCBE';
            currBlock.style.backgroundColor = '#B1DCBE';
            blockCount++;
        }
    }
}

function resizeGrid() {
    var numRows = prompt('Enter a value between 1 and 20. Original grid precision was 16x16. NOTE: THIS WILL CLEAR THE CANVAS')
    if(!numRows) {
        return;
    }
    while(numRows>20) {
        numRows = prompt('That value is too high. Enter a value between 1 and 20.');
    }
    var myNode = document.getElementById('container')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    fillGrid(numRows, numRows);
}

function flipColor(thing) {
    thing.style.color = '#1D7AA2';
    thing.style.background = '#1D7AA2';
}
