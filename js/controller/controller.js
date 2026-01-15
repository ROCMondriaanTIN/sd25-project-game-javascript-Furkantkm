'use strict';

let ronde = 1;
const maxRonde = 3;

// --- Klik op vakje ---
function handleLetterClick(event) {
    const id = parseInt(event.target.id);

    if (!spelActief) {
        alert("Klik eerst op Start en vul beide namen in!");
        
    }


    setFiche(id, currentPlayer);
    showFiches();

    // Check winst
    if (checkWin(currentPlayer)) {
        alert(`${currentPlayer === "X" ? speler1Naam : speler2Naam} heeft gewonnen!`);
        spelActief = false; // spel pauzeert
        return;
    }

    // Check gelijkspel
    if (checkDraw()) {
        alert("Gelijkspel!");
        spelActief = false;
        return;
    }

    // Wissel speler
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    updateBeurt();
}

// --- Start-knop ---
function startSpel() {
    const play1 = document.querySelector("#player1").value.trim();
    const play2 = document.querySelector("#player2").value.trim();

    if (play1 === "" || play2 === "") {
        alert("Vul eerst beide namen in!");
        return;
    }

    speler1Naam = play1;
    speler2Naam = play2;

    currentPlayer = "X";
    ronde = 1;

    resetGame();
    showFiches();
    updateBeurt();
    updateRondeDisplay();

    spelActief = true; // nu mag er gespeeld worden
}

// --- Restart-knop ---
function restartSpel() {
    document.querySelector("#player1").value = "";
    document.querySelector("#player2").value = "";
    speler1Naam = "Speler 1";
    speler2Naam = "Speler 2";

    ronde = 1;
    resetGame();
    showFiches();
    updateBeurt();
    updateRondeDisplay();

    spelActief = false; // spel kan niet gestart worden zonder namen
}
// --- Volgende ronde ---
function nextRound() {
    if (spelActief) {
        alert("Je kunt pas naar de volgende ronde als de huidige ronde is afgelopen!");
        return;
    }

   if (ronde >= maxRonde) {
    if (scoreX > scoreO) {
        alert(`${speler1Naam} heeft het spel gewonnen met ${scoreX} rondes!`);
    } else if (scoreO > scoreX) {
        alert(`${speler2Naam} heeft het spel gewonnen met ${scoreO} rondes!`);
    } else {
        alert(`Het spel is gelijkspel! Beide spelers hebben ${scoreX} rondes gewonnen.`);
    }
    return;
}


    ronde++;               // ronde verhogen
    resetGame();           // reset bord
    showFiches();          // update bord
    updateBeurt();         // update beurtDisplay
    updateRondeDisplay();  // update ronde in de view

    alert(`Ronde ${ronde} gestart!`);
    spelActief = true; // nieuwe ronde kan gespeeld worden
}