class Rabbit {
  constructor(type) {
    this.type = type;
    Rabbit.prototype.teeth = "small";
    Rabbit.prototype.a = [1, 2];
  }

  speak(line) {
    console.log(`This ${this.type} Rabbit says ${line}`);
  }
}

let killerRabbit = new Rabbit("killer");
let weirdRabbit = new Rabbit("Weird");

killerRabbit.speak("I will kill you");
//This killer Rabbit says I will kill you

console.log(killerRabbit.teeth);
//small

killerRabbit.teeth = "Long Sharp Bloody";
console.log(killerRabbit.teeth);
//Long Sharp Bloody

/*Overriding properties that exist in a prototype can be a useful thing to do. As the rabbit
  teeth example shows, overriding can be used to express exceptional properties in instances
  of a more generic class of objects, while letting the nonexceptional objects take a standard
  value from their prototype. */
console.log(killerRabbit.toString);
