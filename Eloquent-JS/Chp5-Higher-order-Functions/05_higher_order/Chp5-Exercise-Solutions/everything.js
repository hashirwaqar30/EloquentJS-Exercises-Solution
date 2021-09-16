/* Analogous to the some method, arrays also have an every method. This one returns true 
   when the given function returns true for every element in the array. In a way, some
   is a version of the || operator that acts on arrays, and every is like the && operator.

   Implement every as a function that takes an array and a test function as parameters.
   Write two versions, one using a loop and one using the some method. */

/* Version 1 Using Loop */
function everyLoopV1(arr, test) {
  let allTrue = true;
  for (let element of arr) {
    allTrue = test(element);
    if (!allTrue) return false;
  }
  return allTrue;
}

function everySomeV2(arr, predicate) {
  return !arr.some((element) => !predicate(element));
}

console.log(everySomeV2([1, 3, 5], (n) => n < 10));
// → true
console.log(everySomeV2([2, 4, 16], (n) => n < 10));
// → false
console.log(everySomeV2([], (n) => n < 10));
// → true
