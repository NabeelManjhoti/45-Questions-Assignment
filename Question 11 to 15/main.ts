// Question 11
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

// Answer
let names = ["Aisha", "Bilal", "Fatima", "Hassan", "Zahra"];
for(let i = 0; i < names.length; i++){
    console.log(names[i]);
};

// Question 12
// Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

// Answer
let personName: string [] = ['Aisha', 'Bilal', 'Fatima'];
personName.forEach (personName =>{
    console.log(`Hello Dear! ${personName}.`)
});

// Question 13
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

// Answer
let cars: string [] = ["Marcedez", "Audi", "BMW", "Supra"];
cars.forEach (cars => {
console.log(`I would like to own a ${cars}.`)
});

// Question 14
// Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

// Answer
let guests:string[] = ["Zara", "Hassan", "Bilal"];
guests.forEach (guests => {
    console.log(`Hey ${guests}, you are invited for today's dinner`)
});

// Question 15
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

// Answer
let guestArr: string[]= ["Zara", "Hassan", "Bilal"];
console.log(guestArr);
let canNotattend: string = "Zara";
console.log(canNotattend + " " + "can not make it, for dinner");
let newGuest: string = "Fatima";
guestArr[guestArr.indexOf(canNotattend)] = newGuest;
guestArr.map((item) => 
  console.log(`Dear ${item}, you are cordinally invited to a dinner`)
);