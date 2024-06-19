//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

//Answer.
  const magicians:string[] = [
    "David Copperfield", 
    "David Blaine", 
    "Harry Houdini", 
    "Penn Jillette", 
    "Teller"
  ];

  function showMagicians(magicians:string[]):void {
    magicians.forEach(magician => {
        console.log(magician);
    });
  };
  showMagicians(magicians);