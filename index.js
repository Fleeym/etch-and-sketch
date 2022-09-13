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
    const isRGBInput = document.getElementById('isRgb');
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
            if (isRGBInput.value === 'on') {
                setRGBBackground(pixel);
            } else {
                pixel.classList.add('hover');
            }
        });
        pixel.addEventListener('mouseleave', () => {
            if (isRGBInput.value === 'on') {
                const defaultColor = getComputedStyle(
                    document.documentElement
                ).getPropertyValue('--background-secondary');
                pixel.style.backgroundColor = defaultColor;
            } else {
                pixel.classList.add('hover');
            }
        });
        container.appendChild(pixel);
    }
}

function setRGBBackground(element) {
    let newColor = 'rgb(';
    for (let i = 0; i < 3; i++) {
        let rgb = Math.random() * 255;
        if (i === 2) {
            newColor += rgb + ')';
        } else {
            newColor += rgb + ', ';
        }
    }
    element.style.backgroundColor = newColor;
}

function updateGridLabel(value) {
    const gridSizeInfo = document.querySelector('.info');
    console.log(gridSizeInfo);
    gridSizeInfo.textContent = value;
}
