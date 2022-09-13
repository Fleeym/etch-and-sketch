'use strict';

const container = document.querySelector('.grid');

let gridSize = 16;

// Initialize
generateGrid(gridSize);

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

function setGridSize(size) {
    gridSize = size;
}
