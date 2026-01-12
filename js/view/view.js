'use strict';

let cells;

function bindCells() {
    cells = document.querySelectorAll('.boxdisplay div');

    for (let c = 0; c < cells.length; c++) {
        cells[c].addEventListener('click', handleLetterClick);
    }
}

function showFiches() {
    for (let c = 0; c < cells.length; c++) {
        cells[c].innerHTML = fiches[c];
    }
}
console.log("Huidige speler:", currentPlayer === "X" ? speler1Naam : speler2Naam);
