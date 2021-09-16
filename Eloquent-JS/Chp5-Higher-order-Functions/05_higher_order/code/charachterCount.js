/* To use reduce (twice) to find the script with the most characters, 
   we can write*/

var SCRIPTS = require("./scripts.js");

function characterCount(script) {
  return script.ranges.reduce((count, [from, to]) => {
    return count + (to - from);
  }, 0);
}
/*The characterCount function reduces the ranges assigned to a script by summing their sizes.
Note the use of destructuring in the parameter list of the reducer function.
The second call to reduce then uses this to find the largest script by repeatedly comparing two 
scripts and returning the larger one.

The Han script has more than 89,000 characters assigned to it in the Unicode standard, 
making it by far the biggest writing system in the data set.
Han is a script (sometimes) used for Chinese, Japanese, and Korean text.
Those languages share a lot of characters, though they tend to write them differently. 
The (U.S.-based) Unicode Consortium decided to treat them as a single writing system to save character codes. 
This is called Han unification and still makes some people very angry.*/

console.log(
  SCRIPTS.reduce((a, b) => {
    return characterCount(a) < characterCount(b) ? b : a;
  })
);
