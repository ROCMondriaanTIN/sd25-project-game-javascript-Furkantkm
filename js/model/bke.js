'use strict';

let speler1Naam = "Speler 1";
let speler2Naam = "Speler 2";
let currentPlayer = "X";
let spelActief = false;



// speldata
const fiches = ["","","","","","","","",""];




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
        for (let i = 0; i < winCombinaties.length; i++) {
            const combi = winCombinaties[i];

            if (
                fiches[combi[0]] === player &&
                fiches[combi[1]] === player &&
                fiches[combi[2]] === player
            ) {
                return true;
            }
        }
        return false;
    }


// check gelijkspel
function checkDraw() {
    for (let i = 0; i < fiches.length; i++) {
        if (fiches[i] === "") {
            return false; // er is nog een leeg vakje
        }
    }
    return true; // geen lege vakjes → gelijkspel
}



function resetGame() {
    for (let i = 0; i < fiches.length; i++) {
        fiches[i] = ""; // alle vakjes leeg
    }
    currentPlayer = "X"; // start weer met speler X
}







