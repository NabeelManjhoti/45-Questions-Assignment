//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

//Answer.
  let realMadrid:string[] = [
    "Courtous",
    "Carvajal",
    "Militao",
    "Alaba",
    "Bellingham",
    "Nacho",
    "Vinicius",
    "Mbappe",
    "Modric",
  ];
  
  function printRealMadrid(rmArray:string[]):void {
    rmArray.forEach((rm, index) => {
        console.log(`${index + 1}. ${rm}`);
    });
  };
  printRealMadrid(realMadrid);