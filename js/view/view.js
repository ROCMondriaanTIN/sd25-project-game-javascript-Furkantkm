'use strict'
//hier komen de view functies, hieronder staat voorbeeld code
const cells = document.querySelectorAll('.boxdisplay div');

function bindCells(){
    for(let c=0;c<cells.length;c++)
    {
        cells[c].addEventListener('click', handleLetterClick);
    }
}

function showFiches() {

for (let c=0; c<cells.length;c++){
    cells[c].innerHTML= fiches[c];
}

}
