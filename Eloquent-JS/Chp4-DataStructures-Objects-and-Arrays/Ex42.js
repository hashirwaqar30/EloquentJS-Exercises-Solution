//Revrse Array using same array

const reverse = (a) => {
  aLen = a.length;
  start = 0;
  i = 0;

  while (i <= aLen / 2 - 1) {
    start = a[i];
    a[i] = a[aLen - i - 1];
    a[aLen - i - 1] = start;
    i++;
  }
  return a;
};

l = ["A", "b", "c"];
console.log(reverse(l));
