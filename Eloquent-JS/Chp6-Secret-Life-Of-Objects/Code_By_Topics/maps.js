/* A map (noun) is a data structure that associates values (the keys) with other values. For
   example, you might want to map names to ages. It is possible to use objects for this. */

let ages = {
  Hashir: 25,
  Hassan: 23,
};

console.log("Is hashir age there?", "Hashir" in ages);
//true
console.log(`Hassan age is ${ages["Hassan"]}`);
//23
console.log("Is toString there?", "toString" in ages);
//true
/* we certainly didn’t list anybody named toString in our map. Yet, because plain
   objects derive from Object.prototype, it looks like the property is there.

   As such, using plain objects as maps is dangerous. There are several possible ways
   to avoid this problem. First, it is possible to create objects with no prototype. 
   If you pass null to Object.create, the resulting object will not derive from
   Object.prototype and can safely be used as a map. */

console.log("toString" in Object.create(null));
//false

/* JavaScript comes with a class called Map that is written for this exact purpose. 
   It stores a mapping and allows any type of keys. */
let age = new Map();
age.set("Ayesha", 21);
age.set("Amna", 18);

console.log(`Ayesha age is ${age.get("Ayesha")}`);
//Ayesha age is 21

console.log("Is Amna there in ages?", age.has("Amna"));
//true

console.log(age.has("toString"));
//false
