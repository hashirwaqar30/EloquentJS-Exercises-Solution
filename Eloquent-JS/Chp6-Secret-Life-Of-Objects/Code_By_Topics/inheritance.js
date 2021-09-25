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
class SymmetricMatrix extends Matrix {
  constructor(size, element = (x, y) => undefined) {
    super(size, size, (x, y) => {
      if (x < y) return element(y, x);
      else return element(x, y);
    });
  }

  set(x, y, value) {
    super.set(x, y, value);
    if (x != y) {
      super.set(y, x, value);
    }
  }
}

let matrix = new SymmetricMatrix(5, (x, y) => `${x},${y}`);
console.log(matrix.get(2, 3));
// → 3,2

/* The instanceof operator 
   It is occasionally useful to know whether an object was derived from a specific 
   class. For this, JavaScript provides a binary operator called instanceof.*/

console.log(new SymmetricMatrix(2) instanceof SymmetricMatrix);
// → true
console.log(new SymmetricMatrix(2) instanceof Matrix);
// → true
console.log(new Matrix(2, 2) instanceof SymmetricMatrix);
// → false
console.log([1] instanceof Array);
// → true
