'use strict';

let cells;

// Koppel de vakjes
function bindCells() {
    cells = document.querySelectorAll('.boxdisplay div');
    for (let c = 0; c < cells.length; c++) {
        cells[c].addEventListener('click', handleLetterClick);
    }
}

// Toon bord op scherm
function showFiches() {
    for (let c = 0; c < cells.length; c++) {
        cells[c].textContent = fiches[c];
    }
}

// Update de beurt (naam van huidige speler)
function updateBeurt() {
    const beurtDisplay = document.querySelector("#beurtDisplay");
    beurtDisplay.textContent = currentPlayer === "X" ? speler1Naam : speler2Naam;
}

// Update spelersnamen vanuit input
function updateSpelersNamen() {
    const play1 = document.querySelector("#player1").value.trim();
    const play2 = document.querySelector("#player2").value.trim();

    speler1Naam = play1 !== "" ? play1 : "Speler 1";
    speler2Naam = play2 !== "" ? play2 : "Speler 2";
}

function updateRondeDisplay() {
    const rondeSpan = document.querySelector("#rondeDisplay");
    if (rondeSpan) {
        rondeSpan.textContent = `${ronde}/${maxRonde}`;
    }
}

