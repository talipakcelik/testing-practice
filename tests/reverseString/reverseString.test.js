const reverseString = require('./reverseString');

test('a string equal to its reverse', function () {
  expect(reverseString('lorem')).toEqual('merol');
});
