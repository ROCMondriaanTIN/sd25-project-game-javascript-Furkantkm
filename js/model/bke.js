'use strict';
let speler1Naam = "Speler 1";
let speler2Naam = "Speler 2";

// speldata
const fiches = ["","","","","","","","",""];
let currentPlayer = "X";

function isFicheAllowed(id) {
    return fiches[id] === "";
}

function setFiche(id, fiche) {
    fiches[id] = fiche;
}
