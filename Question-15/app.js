/*Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.*/
//Answer.
var guestList = [
    "Haseeb",
    "Haris",
    "Anas",
];
console.log("Unfotunetly ".concat(guestList[0], " is not comming in Today's Dinner"));
guestList.shift();
guestList.unshift("Kareem");
console.log("Mr ".concat(guestList[0], " you are invited in today's Dinner."));
console.log("Mr ".concat(guestList[1], " you are invited in today's Dinner."));
console.log("Mr ".concat(guestList[2], " you are invited in today's Dinner."));
