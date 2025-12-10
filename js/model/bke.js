'use strict'
//hier komt de spelletjes data, hieronder staat een voorbeeld

const words=['rood', 'wit','blauw','geel','violet','groen','roze'];
let selectedWord;

function setSelectedWord() {
    selectedWord = words[Math.floor(Math.random() * words.length)];
}

const fiches = ["","","","","","","","",""];


function setFiche(id,fiche) {

    fiches[id]=fiche;

}

function isFicheAllowed(id) {

if (fiches[id]===""){
    return true;
} else {

    return false;
}


}


function changeActiveSymbol() {

if(changeActiveSymbol==="X"){
    ActiveSymbol="0"
} else {

    ActiveSymbol="X"
}

}