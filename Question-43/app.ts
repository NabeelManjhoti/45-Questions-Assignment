//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//Answer.
const magicians: string[] = [
    "David Copperfield", 
    "David Blaine", 
    "Harry Houdini", 
    "Penn Jillette", 
    "Teller"];

function makeGreat(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(`the Great ${magicians[i]}`);
    }
    return greatMagicians;
}

function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

const greatMagicians = makeGreat([...magicians]);

console.log("Original magicians:");
showMagicians(magicians);

console.log("\nGreat magicians:");
showMagicians(greatMagicians);