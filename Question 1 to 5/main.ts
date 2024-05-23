// Question:1 Install Node.js, TypeScript and VS Code on your computer.
  // Answer: Already Installed.

// Question:2 Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?"
  // Answer:
    let personName:string = "Nabeel";
    console.log(`Hello ${personName}, would you like to learn some TypeScript Today.`);

// Question:3 Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
  // Answer:
    let person:string = "Nabeel Ali";
    console.log("lowercase:", person.toLowerCase());
    console.log("UPPERCASE:", person.toUpperCase());
    console.log("TitleCase:", person.charAt(0).toUpperCase() + person.slice(1).toLowerCase());

// Question:4 Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
  //Answer:
  console.log('Mola Ali as once said, "I will be patient, until even patience tires of my patience."');

// Question:5 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
// Answer:
  let famousPerson:string = "Mola Ali as";
  console.log(`${famousPerson} once said, "I will be patient, until even patience tires of my patience."`);