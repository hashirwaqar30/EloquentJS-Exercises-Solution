/* sWrite a function that computes the dominant writing direction in a string of text. 
  Remember that each script object has a direction property that can be "ltr" (left to right),
  "rtl" (right to left), or "ttb" (top to bottom).

  The dominant direction is the direction of a majority of the characters that have a script 
  associated with them. */

const SCRIPTS = require("./scripts");

function scriptChecker(str) {
  let rtl = 0,
    ltr = 0;

  let direction = {};
  for (let char of str) {
    /* JavaScript’s charCodeAt method gives you a code unit, not a full character code. The codePointAt method, 
     added later, does give a full Unicode character. So we could use that to get characters from a string. But 
     the argument passed to codePointAt is still an index into the sequence of code units. By Hard coding index=0
     it doesn't matter anymore whether a character takes up one or two code units. */

    let code = char.codePointAt(0);

    for (let script of SCRIPTS) {
      if (
        script.ranges.some(([from, to]) => {
          return code >= from && code < to;
        })
      ) {
        script.direction == "rtl"
          ? (direction["rtl"] = rtl++)
          : (direction["ltr"] = ltr++);
      }
    }
  }

  return dominantDirection(direction);
}

function dominantDirection(dir) {
  return dir.rtl == null || dir.ltr > dir.rtl ? "ltr" : "rtl";
}

console.log(scriptChecker("Hello!"));
// → ltr
console.log(scriptChecker("Hey, مساء الخير"));
// → rtl
