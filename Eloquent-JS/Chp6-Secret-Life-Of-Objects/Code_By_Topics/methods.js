/* Methods are nothing more than properties that hold function values. This is a simple method: */

let rabit = {};
rabit.speak = function (line) {
  console.log(`The rabit says '${line}'`);
};

rabit.speak("I'm alive");

//using this keyword binding
function speak(line) {
  console.log(`the ${this.type} rabit says ${line}`);
}
// if type parameter is not given it will print undefined

let whiteRabbit = { type: "white", speak };
let grayRabbit = { type: "gray", speak };

whiteRabbit.speak("my color is white");
grayRabbit.speak("my color is gray");

/*You can think of this as an extra parameter that is passed in a different way. If you 
  want to pass it explicitly, you can use a function’s call method, which takes the this 
  value as its first argument and treats further arguments as normal parameters.*/

speak.call(grayRabbit, "burp");

/*Since each function has its own this binding, whose value depends on the way it is 
  called, you cannot refer to the this of the wrapping scope in a regular function 
  defined with the function keyword.

  Arrow functions are different—they do not bind their own this but can see the this 
  binding of the scope around them. Thus, you can do something like the following code,
  which references this from inside a local function: */

function normalize() {
  console.log(this.coords.map((n) => n / this.length));
}
normalize.call({ coords: [0, 2, 4], length: 5 });
