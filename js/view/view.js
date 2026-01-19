'use strict';

let cells;
let scoreX = 0;
let scoreO = 0;
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
    //AANPASSEN NAAR EEN NORMALE
    //beurtDisplay.textContent = currentPlayer === "X" ? speler1Naam : speler2Naam;
    showMessage(currentPlayer === "X" ? speler1Naam : speler2Naam);
}

// Update spelersnamen vanuit input
function updateSpelersNamen() {
    const play1 = document.querySelector("#player1").value.trim();
    const play2 = document.querySelector("#player2").value.trim();

    //AANPASSEN NAAR EEN NORMALE IF STATEMENT
    speler1Naam = play1 !== "" ? play1 : "Speler 1";
    speler2Naam = play2 !== "" ? play2 : "Speler 2";

    if (play1 !== "") {
        speler1Naam = play1;
    } else {
        speler1Naam = "speler1";
    }

    if (play2 !== "") {
        speler2Naam = play2;
    } else {
        speler2Naam = "speler2";
    }
}

function updateRondeDisplay() {
    const rondeSpan = document.querySelector("#rondeDisplay");
    if (rondeSpan) {
        rondeSpan.textContent = `${ronde}/${maxRonde}`;
    }
}

function updateScore() {
    document.querySelector("#scoreX").textContent = scoreX;
    document.querySelector("#scoreO").textContent = scoreO;
}
function showMessage (m) {

let announceMessage = document.querySelector(".message");
announceMessage.innerHTML = m;

}
