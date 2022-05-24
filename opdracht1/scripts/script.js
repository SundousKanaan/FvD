// JavaScript Document
console.log("Dit file heeft alleen een herstarten knop op de hele tekst");

var herstartenknop = document.querySelector('h1')

// Dom Manipulatie functies (herstarten img)
function reload(){
    location.reload();
}

// EventListeners (herstarten img)
herstartenknop.addEventListener('click' , reload);