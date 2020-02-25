console.log("hello world")

var carousel = document.querySelector(".carousel");


carousel.style.transform = "rotateY(-60deg";
var position = 0
var prev = document.querySelector(".prev")
var next = document.querySelector(".next")

function rotate(direction) {

    position += direction;
    carousel.style.transform = "rotateY(" + position + "deg)";

}

prev.addEventListener("click", function () {
    rotate(60);
})
next.addEventListener("click", function () {
    rotate(-60);
})
console.log(prev);
console.log(next);
console.log(carousel);


















/*function moyenne(note) {
    var somme= 0 
    var len = note.length;
    for(var i = 0; i < len; i++) {
        somme += parseInt(note[i]);
    
    }
    return somme/len;
}

var notesAlice = [16, 12, 8, 15]
var notesBob = [7, 8, 10, 9, 19]

console.log("Moyenne Alice : " + moyenne(notesAlice));
console.log("Moyenne Bob : " + moyenne(notesBob));*/

