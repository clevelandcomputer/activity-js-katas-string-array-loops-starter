/*
  LETTER COUNT

  1. Create a variable, named "word," which contains any lengthy word.
  2. Create a second variable, named "letter," which contains any
      letter. This simulates the letter that the player "guessed."
  3. Write a WHILE statement which loops over the `word` string and
     counts the number of times the "guessed" letter appears.
  4. If the letter is found in the string, display on the page: "The letter X
     exists N times in this word!" (replacing "X" with
     the letter guessed and "N" with the letter count).
  5. If the letter isn't found in the string, display on the page: "Nope, that
     letter doesn't exist in my word!"
  6. OPTIONAL: Use an input textbox and click event listener to obtain
     an actual player guess for Point 2.

  TIP: What do we mean by "display on the page"? `.innerHTML` could achieve
       this!

*/

// YOUR CODE HERE

const insertWord = document.querySelector('#user-input');
const insertLetter = document.querySelector('#search-letter');
const text = document.querySelector('#text');
const search = document.querySelector('#search');


search.addEventListener('click', function(){


let word = insertWord.value.toLowerCase();
let letter = insertLetter.value.toLowerCase();

let newLetterCounter = 0;
let i = 0;
while (i < word.length){
   let wordToArray = word.split("");
   let foundWord = wordToArray[i].includes(letter);
   if (foundWord === true){
      newLetterCounter += 1;
   }
   
   i++;
}

if (newLetterCounter > 0){
text.innerHTML = 'The letter ' + letter + ' exists ' + newLetterCounter + ' times in this word!'
} else {
   text.innerHTML = 'Nope, that letter doesn\'t exist in the word!'
}


})