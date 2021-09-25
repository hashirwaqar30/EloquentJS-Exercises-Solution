let okIterator = "OK"[Symbol.iterator]();
console.log(okIterator.next());
//{ value: 'O', done: false }
console.log(okIterator.next());
//{ value: 'K', done: false }
console.log(okIterator.next());
//{ value: undefined, done: true }

class Matrix {
  constructor(row, column, element = (x, y) => undefined) {
    this.row = row;
    this.column = column;
    this.content = [];

    for (let y = 0; y < row; y++) {
      for (let x = 0; x < column; x++) {
        this.content[y * column + x] = element(x, y);
      }
    }
  }

  get(x, y) {
    return this.content[y * this.column + x];
  }
  set(x, y, value) {
    this.content[y * this.column + x] = value;
  }
}

class MatrixIterator {
  constructor(matrix) {
    this.x = 0;
    this.y = 0;
    this.matrix = matrix;
  }
  next() {
    if (this.y == this.matrix.row) return { done: true };

    let value = {
      x: this.x,
      y: this.y,
      value: this.matrix.get(this.x, this.y),
    };
    this.x++;
    if (this.x == this.matrix.column) {
      this.x = 0;
      this.y++;
    }
    return { value, done: false };
  }
}

Matrix.prototype[Symbol.iterator] = function () {
  return new MatrixIterator(this);
};

let matrix = new Matrix(3, 2, (x, y) => `value ${x},${y}`);
for (let { x, y, value } of matrix) {
  console.log(x, y, value);
}
