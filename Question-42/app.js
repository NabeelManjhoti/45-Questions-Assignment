"use strict";
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
const magicians = ["David Copperfield", "David Blaine", "Harry Houdini", "Penn Jillette", "Teller"];
function makeGreat(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}
function showMagicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
makeGreat(magicians);
showMagicians(magicians);
