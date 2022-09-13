'use strict';

const container = document.querySelector('.grid');

let gridSize = 16;

// Initialize
generateGrid(gridSize);

function generateGrid(gridSize) {
    const containerSide = container.offsetWidth;
    console.log(containerSide);
    console.log(containerSide / gridSize);
    let sizes = '';
    for (let i = 0; i < containerSide / gridSize; i++) {
        sizes += gridSize + 'px ';
    }
    console.log(sizes);
    container.style.gridTemplateColumns = sizes;
    container.style.gridTemplateRows = sizes;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const pixel = document.createElement('div');
        pixel.classList.add('grid-item');
        pixel.addEventListener('mouseenter', () => {
            pixel.classList.add = 'hover';
        });
        container.appendChild(pixel);
    }
}

function setGridSize(size) {
    gridSize = size;
}
