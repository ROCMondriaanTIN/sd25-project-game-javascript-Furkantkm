'use strict'
//hier komen de eventhandlers, hieronder staat een voorbeeld

function handleLetterClick(event) {
    console.log(event.target.id);

    if (isFicheAllowed(event.target.id))
{
setFiche(event.target.id, "X");
showFiches();
} else 
{
console.log("fiche not allowed at:" + event.target.id);

}

console.log(fiches);}