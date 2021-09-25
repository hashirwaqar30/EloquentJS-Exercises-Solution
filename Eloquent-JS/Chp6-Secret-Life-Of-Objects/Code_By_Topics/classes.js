function Rabbit(type) {
  this.type = type;
}
Rabbit.prototype.speak = function (line) {
  console.log(`This ${this.type} Rabbit says ${line}`);
};
Rabbit.prototype.run = function (line) {
  console.log(`${line}`);
};
/* Put the keyword new in front of a function call, the function
   is treated as a constructor. This means that an object with the
   right prototype is automatically created, bound to this in the
   function, and returned at the end of the function.

 The prototype object used when constructing objects is found
 by taking the prototype property of the constructor function. */

let weirdRabbit = new Rabbit("Weird");
weirdRabbit.speak("leave me alone");
//This Weird Rabbit says leave me alone
weirdRabbit.run("I will run fast");
//I will run fast

console.log(Object.getPrototypeOf(weirdRabbit));
//{ speak: [Function (anonymous)], run: [Function (anonymous)] }

console.log(Rabbit.prototype);
//{ speak: [Function (anonymous)], run: [Function (anonymous)] }

console.log(Object.getPrototypeOf(weirdRabbit) == Rabbit.prototype);
//true
