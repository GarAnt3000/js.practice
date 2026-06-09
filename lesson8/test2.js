const numbers = [1, 2, 3, 4, 5];

const result = numbers.map(function (element, index) {
  const newValue = element * index;
  return newValue;
});

console.log(result);