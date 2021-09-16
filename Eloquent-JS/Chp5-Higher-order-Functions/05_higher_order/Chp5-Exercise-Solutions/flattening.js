/* Use the reduce method in combination with the concat method to “flatten” an array 
   of arrays into a single array that has all the elements of the original arrays. */

function flattening(arr) {
  return arr.reduce((a, b) => {
    return a.concat(b);
  });
}

let a = [[1, 2, 3, 4], [5, 6], [7]];
console.log(flattening(a));
