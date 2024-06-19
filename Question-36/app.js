"use strict";
/*T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.*/
//Answer.
function makeShirt(size, message) {
    console.log(`The shirt size is ${size} and the message printed on this is "${message}"`);
}
;
makeShirt("L", "Hello World");
makeShirt("M", "TypeScript Rocks");
makeShirt("S", "Coding is fun");
