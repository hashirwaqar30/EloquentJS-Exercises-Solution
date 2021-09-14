function deepEqual(a, b) {
  if (a === b) {
    console.log(`this zero`, a, b);
    return true;
  }

  if (a == null || typeof a != "object" || b == null || typeof b != "object") {
    console.log(`this one`, a, b);
    return false;
  }

  let keysA = Object.keys(a),
    keysB = Object.keys(b);

  if (keysA.length != keysB.length) {
    console.log(`this 2nd`);
    return false;
  }

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
      console.log(`this 3rd`, a, b);
      return false;
    }
  }

  return true;
}

let obj = { here: { is: "an" }, object: 2 };
let obj1 = { here: 1, object: 2 };
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: "an" }, object: 2 }));
// → true
console.log(obj["here"]["is"]);
