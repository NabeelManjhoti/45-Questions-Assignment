/*More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.*/

//Answer.
  let guestList:string[] = [
    "Kareem",
    "Haris",
    "Anas",
  ];

  console.log(`Dear ${guestList} I want to inform you that I found a bigger table and some more Guests will join us in today's Dinner`);

  guestList.unshift("Sangeen");
  guestList.splice(2, 0, "Saad");
  guestList.push("Mahar");

  console.log(`Hi Mr ${guestList[0]}, you are invited in today's Dinner`);
  console.log(`Hi Mr ${guestList[1]}, you are invited in today's Dinner`);
  console.log(`Hi Mr ${guestList[2]}, you are invited in today's Dinner`);
  console.log(`Hi Mr ${guestList[3]}, you are invited in today's Dinner`);
  console.log(`Hi Mr ${guestList[4]}, you are invited in today's Dinner`);
  console.log(`Hi Mr ${guestList[5]}, you are invited in today's Dinner`);