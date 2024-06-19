//Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

//Answer.
  function makeShirt(size:string = "L", message:string  = "I love TypeScript"):void {
    console.log(`The shirt size is ${size} and the message printed on it is "${message}"`);
  };
  makeShirt();

  makeShirt("M");
  makeShirt("S", "Coding is Fun");
