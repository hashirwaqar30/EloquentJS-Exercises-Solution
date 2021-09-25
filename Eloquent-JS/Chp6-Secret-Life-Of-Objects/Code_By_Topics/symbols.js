/*  Symbols are values created with the Symbol function. Unlike strings, newly
    created symbols are unique—you cannot create the same symbol twice. */

let sym = Symbol("name");

console.log(sym == Symbol("name"));
//false

const toStringSymbol = Symbol("toString");
Array.prototype.toStringSymbol = function () {
  return `a blue yarn of ${this.length}cm`;
};

console.log([1, 2].toString());
//1,2
console.log([1, 2].toStringSymbol());
//2

let stringObject = {
  [toStringSymbol]() {
    return "a jute rope";
  },
};
console.log(stringObject[toStringSymbol]());
//a jute rope
