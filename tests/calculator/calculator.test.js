const calculator = require('./calculator');

test('add two parameters', function () {
  expect(calculator.add(8, 4)).toBe(12);
});

test('subtract two parameters', function () {
  expect(calculator.subtract(8, 4)).toBe(4);
});

test('divide two parameters', function () {
  expect(calculator.divide(8, 4)).toBe(2);
});

test('multiply two parameters', function () {
  expect(calculator.multiply(8, 4)).toBe(32);
});
