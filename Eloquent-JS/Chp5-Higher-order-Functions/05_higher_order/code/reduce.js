/* The parameters to reduce are, apart from the array, a combining function and a start value. 
   This function is a little less straightforward than filter and map,
   so take a close look at it:*/

const reduce = (array, combine, start) => {
  let current = start;
  array.forEach((element) => {
    current = combine(current, element);
  });
  return current;
};

console.log(reduce([1, 2, 3, 4], (a, b) => a + b, 0));
