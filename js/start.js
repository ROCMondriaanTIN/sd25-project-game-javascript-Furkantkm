'use strict';

// start.js: alleen opstarten
window.onload = function() {
    // koppel vakjes aan klik events
    bindCells();

    // koppel knoppen
    document.querySelector("#startBtn").addEventListener("click", startSpel);
    document.querySelector("#restartBtn").addEventListener("click", restartSpel);
    document.querySelector("#nextRoundBtn").addEventListener("click", nextRound)

    // toon meteen de eerste beurt
    updateBeurt();
};
