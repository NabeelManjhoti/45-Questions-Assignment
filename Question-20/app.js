"use strict";
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
//Answer.
let realMadrid = [
    "Courtous",
    "Carvajal",
    "Militao",
    "Alaba",
    "Bellingham",
    "Nacho",
    "Vinicius",
    "Mbappe",
    "Modric",
];
function printRealMadrid(rmArray) {
    rmArray.forEach((rm, index) => {
        console.log(`${index + 1}. ${rm}`);
    });
}
;
printRealMadrid(realMadrid);
