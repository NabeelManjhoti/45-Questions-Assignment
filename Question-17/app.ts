/*Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
• Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guestList:string[] = [
    "Sangeen",
    "Saad",
    "Saad Gujjar",
    "Mahar",
    "Muzammil",
    "Suleman",
];

console.log("Sorry Friends I can invite only 2 Friends.");

console.log(`Sorry Mr ${guestList[5]} I can't Invite you in Today's Dinner.`);
guestList.pop();
console.log(`Sorry Mr ${guestList[4]} I can't Invite you in Today's Dinner.`);
guestList.pop();
console.log(`Sorry Mr ${guestList[3]} I can't Invite you in Today's Dinner.`);
guestList.pop();
console.log(`Sorry Mr ${guestList[2]} I can't Invite you in Today's Dinner.`);
guestList.pop();

console.log(`Mr ${guestList[0]}, you are still invited in today's Dinner.`)

guestList.splice(0, 2);
console.log(guestList);