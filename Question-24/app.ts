/*More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/

//Answer.
let string1:string = "hello";
let sring2:string = "world";

console.log(string1 === "hello"); //True
console.log(sring2 === "World"); //False

let string3:string = "HELLO";
console.log(string3.toLowerCase() === "hello"); //True
console.log(string3.toLowerCase() === "HELLO"); //False

let num1:number = 5;
let num2:number = 7;
console.log(num1 !== num2); //True
console.log(num1 === num2); //False

console.log(num1 > num2); //False
console.log(num1 < num2); //True

console.log(num1 >= num2); //False
console.log(num1 <= num2); //True

console.log(num1 < num2 && num1 > num2); //False
console.log(num1 === num2 || num1 !== num2); //True 

let arr:number[] = [
  1, 2, 3, 4, 5
];
console.log(arr.includes(5)); //True
console.log(arr.includes(10)); //False

console.log(!arr.includes(6)); //True
console.log(!arr.includes(3)); //False