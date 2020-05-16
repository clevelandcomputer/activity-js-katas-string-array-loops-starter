/*
  TALLEST MOUNTAIN

  1. From scratch, create an array containing a bunch of numbers representing
     the heights of various mountains.
  2. Write a WHILE loop which identifies the height of the tallest of the
     available mountains in the array.
  3. Display the tallest height value on the page.
*/

// YOUR CODE HERE


let tops = [14478, 22348, 17464, 47894, 32331, 11746]

let i = 0;
let highest = 0;

while (i < tops.length){
   if(highest < tops[i]){
      highest = tops[i];
   }

   i++
}

document.write(highest)