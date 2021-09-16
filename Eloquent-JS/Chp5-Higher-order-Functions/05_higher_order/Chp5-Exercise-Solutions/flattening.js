function flattening(arr) {
  return arr.reduce((a, b) => {
    return a.concat(b);
  });
}

let a = [[1, 2, 3, 4], [5, 6], [7]];
console.log(flattening(a));
