'use strict';

let ronde = 1;
const maxRonde = 3;

// --- Klik op vakje ---
function handleLetterClick(event) {
    const id = parseInt(event.target.id);

    if (!spelActief) {
        alert("Klik eerst op Start en vul beide namen in!");
    } else {
        if (fiches[id] === "") {
            setFiche(id, currentPlayer);
              
showFiches();
        






        // Check winst
        if (checkWin(currentPlayer)) {
            //HIER OOK DE TRADITIONELE IF STATEMENT
            alert(`${currentPlayer === "X" ? speler1Naam : speler2Naam} heeft gewonnen!`);
            spelActief = false; // spel pauzeert
            if (currentPlayer === "X") {
                scoreX++;
            } else if (currentPlayer === "O") {
                scoreO++;

            } updateScore()

        }


        // Check gelijkspel
        if (checkDraw()) {
            alert("Gelijkspel!");
            spelActief = false;
            return;
        }
  currentPlayer = currentPlayer === "X" ? "O" : "X";
  updateBeurt();

    }
        
    }
}


// --- Start-knop ---
function startSpel() {
    const play1 = document.querySelector("#player1").value.trim();
    const play2 = document.querySelector("#player2").value.trim();

    //OR-statement. Als de ene true is dan wordt de statement uitgevoerd. 
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
    if (!speler1Naam || !speler2Naam || speler1Naam === "Speler 1" || speler2Naam === "Speler 2") {
        
    }

spelActief = true
    // maximum aantal rondes bereikt
    if (ronde >= maxRonde) {
        // Bepaal winnaar van het hele spel
        if (scoreX > scoreO) {
            alert(`${speler1Naam} heeft het spel gewonnen met ${scoreX} rondes!`);
        } else if (scoreO > scoreX) {
            alert(`${speler2Naam} heeft het spel gewonnen met ${scoreO} rondes!`);
        } else {
            alert(`Het spel is gelijkspel! Beide spelers hebben ${scoreX} rondes gewonnen.`);
        }
        return;
    }

    // Start nieuwe ronde
    ronde++;
    resetGame();
    showFiches();
    updateBeurt();
    updateRondeDisplay();
    alert(`Ronde ${ronde} gestart!`);
}
