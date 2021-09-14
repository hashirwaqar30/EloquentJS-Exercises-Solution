var SCRIPTS = require("./scripts");

const map = (array, transform) => {
  let mapped = [];
  for (let event of array) {
    mapped.push(transform(event));
  }
  return mapped;
};

console.log(map(SCRIPTS, (s) => s.name));
