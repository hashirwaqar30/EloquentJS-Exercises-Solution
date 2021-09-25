/* Make the Group class from the previous exercise iterable. Refer to the section about the
iterator interface earlier in the chapter if you aren’t clear on the exact form of the interface
anymore.

If you used an array to represent the group’s members, don’t just return the iterator created by
calling the Symbol.iterator method on the array. That would work, but it defeats the purpose of 
this exercise.

It is okay if your iterator behaves strangely when the group is modified during iteration.*/
class Group {
  constructor() {
    this.move = [];
  }
  has(value) {
    return this.move.some((i) => i === value);
  }

  add(value) {
    if (!this.has(value)) this.move.push(value);
  }

  delete(value) {
    this.group.splice(this.move.indexOf(value), 1);
  }
  static from(iterable) {
    let move = new Group();
    for (let i of iterable) move.add(i);
    return move;
  }
  [Symbol.iterator]() {
    return new GroupIterable(this);
  }
}

class GroupIterable {
  constructor(group) {
    this.x = 0;
    this.group = group;
  }
  next() {
    if (this.x >= this.group.move.length) return { done: true };
    else {
      let result = { value: this.group.move[this.x], done: false };
      this.x++;
      return result;
    }
  }
}

for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
