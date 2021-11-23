let currentColor = '#000000';
let rainbowClicked = false;
const container = document.getElementsByClassName('container')[0];
const currentPixels = document.getElementById('pixels');
const pixelsText = document.querySelector(".settings-left-bottom p")
const clearButton = document.getElementById('clear');
const allChildren = document.getElementsByClassName('child');
const rainbowButton = document.getElementById('rainbow');

function createCells(numberOfCells) { // This function creates the cells where the drawing will take place
    container.style.gridTemplateColumns = `repeat(${numberOfCells}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${numberOfCells}, 1fr)`;
    for (let i = 0; i < numberOfCells * numberOfCells; i++) {
        let firstChild = document.createElement('div');
        firstChild.classList.add('child');
        firstChild.addEventListener("mouseover", showColour, false);
        container.appendChild(firstChild);
    }
}

createCells(16)

document.getElementById('color').addEventListener("change", setColor, false);

function setColor() { // This function sets the color to be used based on the color picker
    currentColor = event.target.value;
}


currentPixels.addEventListener("change", setPixels, false);
currentPixels.addEventListener("input", setPixelsP, false);

function setPixels() { // This function sets the number of pixels on each row
    clearCells();
    createCells(currentPixels.value);
}

function setPixelsP() { // This function sets the p tag according to the number of pixels
    pixelsText.textContent = `${currentPixels.value} x ${currentPixels.value}`
}   

function showColour(e) { // This function shows the colour that is selected when mouse hovers over div
    if (rainbowClicked) {
        e.target.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`
    } else {
        e.target.style.background = currentColor;
    }
}

clearButton.addEventListener("click", clearCells, false);

function clearCells() {
    Array.from(allChildren).forEach(element => {
        element.style.background = "white";
    });
}

rainbowButton.addEventListener("click", setRainbow, false);

function setRainbow() {
    rainbowClicked = !rainbowClicked;
    if (rainbowClicked) {
        rainbowButton.style.background = "linear-gradient(to left, red, orange, yellow, green, blue, indigo, violet)";
    } else {
        rainbowButton.style.background = "white";
    }
}
