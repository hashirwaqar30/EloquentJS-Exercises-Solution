class Rabbit {
  constructor(type) {
    this.type = type;
    Rabbit.prototype.toString = function () {
      return `a ${this.type} Rabbit`;
    };
  }
  speak(line) {
    console.log(`The ${this.type} Rabbit says ${line}`);
  }
}

let killerRabbit = new Rabbit("Killer");
console.log(killerRabbit.toString());
//a Killer Rabbit

console.log(String(killerRabbit));
//a killer Rabbit
