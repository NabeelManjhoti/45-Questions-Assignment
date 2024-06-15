import { json } from "stream/consumers";

// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
let personName:string = "Nabeel Ali";
console.log(`Hello ${personName}, Would you like to learn some python today.`);

// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
console.log(personName.charAt(0), personName.slice(1));

let nameWithWhiteSpace:string = "\t\n Nabeel Ali \n\t";
console.log("Name with White Space");
console.log(nameWithWhiteSpace);

let strippedName:string = nameWithWhiteSpace.trim();
console.log("\n Name after stripping whitespace:");
console.log(strippedName);