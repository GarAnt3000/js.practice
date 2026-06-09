const numbers = [10, 20, 30, 40, 50];

let sum = numbers.reduce(function (acc, num) {
  acc = acc + num;
  return acc;
}, 0);

console.log(sum);