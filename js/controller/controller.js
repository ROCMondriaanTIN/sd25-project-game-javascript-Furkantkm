
function updateSpelersNamen() {
const play1 = document.querySelector("#player1");
const play2 = document.querySelector("#player2")
}

    if (input1.value !== "") {
        speler1Naam = input1.value;
    }
    if (play1.value !== "") {
        speler2Naam = play2.value;
    } 

'use strict';
// eventhandler voor klikken op een vakje
function handleLetterClick(event) {
    const id = parseInt(event.target.id);

    // check of vakje leeg is
    if (isFicheAllowed(id)) {
        // zet huidige speler in het vakje
        setFiche(id, currentPlayer);

        // update bord op scherm
        showFiches();

        // beurt wisselen
        if (currentPlayer === "X") {
            currentPlayer = "O";
        } else {
            currentPlayer = "X";
        }
const beurtDisplay = document.querySelector("#beurtDisplay");
beurtDisplay.textContent = currentPlayer === "X" ? speler1Naam : speler2Naam;
        console.log("huidige speler:", currentPlayer); // debug
        console.log(fiches); // debug
    }
}
