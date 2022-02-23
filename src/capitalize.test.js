const capitalize = require('./capitalize');

test('capitalize first character of string', function () {
  expect(capitalize('lorem')).toEqual('Lorem');
});

test('capitalize first character of string', function () {
  expect(capitalize('LOREM')).toEqual('Lorem');
});
