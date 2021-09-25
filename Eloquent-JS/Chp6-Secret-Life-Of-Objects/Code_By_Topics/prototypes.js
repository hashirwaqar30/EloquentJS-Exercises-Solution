let empty = {};
console.log(empty.toString);
//[Function: toString]
console.log(empty.toString());
//[object Object]

/*  In addition to their set of properties, most objects also have a prototype. A prototype 
    is another object that is used as a fallback source of properties. When an object gets a 
    request for a property that it does not have, its prototype will be searched for the property,
    then the prototype’s prototype, and so on.

    So who is the prototype of that empty object? It is the great ancestral 
    prototype, the entity behind almost all objects, Object.prototype. */

console.log(Object.prototype);
//[Object: null prototype] {}
console.log(Object.getPrototypeOf({}));
//[Object: null prototype] {}
console.log(Object.getPrototypeOf({}) == Object.prototype);
//true
console.log(Object.getPrototypeOf(Object.prototype));
//null
console.log(Object.getPrototypeOf(Math.max) == Function.prototype);
//true
console.log(Object.getPrototypeOf([]) == Array.prototype);
//true

/* You can use Object.create to create an object with a specific prototype. */
let protoRabit = {
  type: "white",
  speak(line) {
    console.log(`The ${this.type} Rabbit says ${line}`);
  },
};
let killerRabbit = Object.create(protoRabit);
killerRabbit.type = "Killer";
killerRabbit.speak("Skreeeees");
// The Killer Rabbit says Skreeeees
