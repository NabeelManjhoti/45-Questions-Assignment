/*Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed for the appropriate color alien.*/

//Answer.
  let alienColor:string = "Green";
  if(alienColor === "Green"){
    console.log("The player just earned 5 points");
  }else if(alienColor === "Yellow"){
    console.log("The player just earned 10 points");
  }else if(alienColor === "Red"){
    console.log("The player just earned 15 points");
  }else{
    console.log("You didn't encounter a green, yellow, or red alien.");
  };

  //Example 2
  let alienColor2:string = "Yellow";
  if(alienColor2 === "Green"){
    console.log("The player just earned 5 points");
  }else if(alienColor2 === "Yellow"){
    console.log("The player just earned 10 points");
  }else if(alienColor2 === "Red"){
    console.log("The player just earned 15 points");
  }else{
    console.log("You didn't encounter a green, yellow, or red alien.");
  };

  //Example 3
  let alienColor3:string = "Red";
  if(alienColor3 === "Green"){
    console.log("The player just earned 5 points");
  }else if(alienColor3 === "Yellow"){
    console.log("The player just earned 10 points");
  }else if(alienColor3 === "Red"){
    console.log("The player just earned 15 points");
  }else{
    console.log("You didn't encounter a green, yellow, or red alien.");
  };