'use strict';

let speler1Naam = "Speler 1";
let speler2Naam = "Speler 2";
let currentPlayer = "X";
let spelActief = false;
let scoreO = 0;
let scoreX = 0;

// speldata
const fiches = ["","","","","","","","",""];

// check of vakje leeg is
function isFicheAllowed(id) {
    return fiches[id] === "";
}

// zet fiche
function setFiche(id, fiche) {
    fiches[id] = fiche;
}

// win combinaties
const winCombinaties = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// check winst
function checkWin(player) {
    return winCombinaties.some(combi =>
        combi.every(index => fiches[index] === player)
    );
}

// check gelijkspel
function checkDraw() {
    return fiches.every(fiche => fiche !== ""); // aangepast van null naar ""
}
function resetGame() {
    for (let i = 0; i < fiches.length; i++) {
        fiches[i] = ""; // alle vakjes leeg
    }
    currentPlayer = "X"; // start weer met speler X
}







