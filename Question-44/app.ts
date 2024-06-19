//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

//Answer.
  function makeSandwich(...items:string[]):void {
    console.log("Sandwich Order Summary");
    console.log("You have ordered a Sandwich with the following Items");
    for(let item of items){
        console.log(`- ${item}`); 
    };
    console.log("\n");
  };

  makeSandwich("Chicken", "Cheese", "Lettuce", "Tomato");
  makeSandwich("Turkey", "Beef", "Avocado");
  makeSandwich("Peanut Butter", "Jelly");