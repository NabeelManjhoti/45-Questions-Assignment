/*Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
• If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.*/

//Answer
  let alienColor:string = "Green";
  if(alienColor === "Green"){
    console.log("The Player just earned 5 points for shooting the alien");
  }else {
    console.log("The player just earned 10 points");
  };

  //Example 2. Else block will run.
    let alienColor1:string = "Red";
    if(alienColor1 === "Green"){
        console.log("The player just earned 5 points for shooting the alien");
    }else {
        console.log("The player just earned 10 points");
    };