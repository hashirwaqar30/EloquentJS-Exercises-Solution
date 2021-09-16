/*Higher-order functions start to shine when you need to compose operations. As an example, 
  let’s write code that finds the average year of origin for living and
  dead scripts in the data set.*/

const SCRIPTS = require("./scripts");

function average(script) {
  return script.reduce((a, b) => a + b) / script.length;
}

console.log(
  Math.round(average(SCRIPTS.filter((s) => s.living).map((s) => s.year)))
);

console.log(
  Math.round(average(SCRIPTS.filter((s) => !s.living).map((s) => s.year)))
);
/*I hope you’ll agree that the code used to compute it isn’t hard to read. 
  You can see it as a pipeline: we start with all scripts,
  filter out the living (or dead) ones,
  take the years from those, average them, and round the result. */
