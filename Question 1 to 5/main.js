// Question 1
// Install Node.js, TypeScript and VS Code on your computer.
// Answer
// Already installed
// Question 2
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
// Answer
let personName = "Aisha";
console.log("Hello personName, would you like to learn some python today.");
// Question 3
// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
// Answer
let personName2 = "Bilal";
console.log(personName2.toLowerCase());
console.log(personName2.toUpperCase());
console.log(personName2.charAt(0).toUpperCase() + personName2.slice(1).toLowerCase());
// Question 4
// Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Answer
console.log('Elbert Hubbard once said "When life gives you lemons, make lemonade."');
// Question 5
// Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Answer
let famous_person = "Benjamin Franklin";
let message = `${famous_person} once said, "Time is money."`;
console.log(message);
export {};
