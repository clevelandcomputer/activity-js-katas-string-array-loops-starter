/*
  REDUCE THE DUPS

  1. Given the already-sorted array `[1, 1, 2, 3, 3, 4]`, write
     a WHILE loop which creates a copy of this array, except
     with the duplicates removed.
  2. Display both arrays as strings on the page.

*/

const redundantArray = [1, 1, 2, 3, 3, 4]
// YOUR CODE HERE

let i = 0;
let empty = [];
while(i < redundantArray.length){
     empty = [...new Set(redundantArray)];
    i++
}
document.write(empty)

// let i = 0;
// let empty = [];
// while(i < redundantArray.length){
     
//     i++
// }
// document.write(empty)