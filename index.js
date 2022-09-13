'use strict';

const initalGridSize = 16;
const container = document.querySelector('.grid');
const gridSizeInput = document.getElementById('gridSize');
const changeGridButton = document.querySelector('.change-grid');

// Initialize
generateGrid(initalGridSize);

changeGridButton.addEventListener('click', () => {
    const newGridSize = gridSizeInput.value;
    console.log(newGridSize);
    if (newGridSize < 0 || newGridSize > 100 || newGridSize === '') {
        alert(
            'Invalid grid size! The grid must be bigger than 0x0 and smaller than 100x100!'
        );
        return;
    } else {
        resetGrid();
        generateGrid(newGridSize);
        updateGridLabel(newGridSize);
    }
});

function resetGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function generateGrid(gridSize) {
    const containerSide = container.offsetWidth;
    let sizes = '';
    for (let i = 0; i < gridSize; i++) {
        sizes += containerSide / gridSize + 'px ';
    }
    container.style.gridTemplateColumns = sizes;
    container.style.gridTemplateRows = sizes;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('grid-item');
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add('hover');
        });
        pixel.addEventListener('mouseleave', () => {
            pixel.classList.remove('hover');
        });
        container.appendChild(pixel);
    }
}

function updateGridLabel(value) {
    const gridSizeInfo = document.querySelector('.info');
    console.log(gridSizeInfo);
    gridSizeInfo.textContent = value;
}
