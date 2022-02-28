const caesarCipher = require('./caesarCipher');

test('a string with ceasar cipher', function () {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 1)).toEqual(
    'bcdefghijklmnopqrstuvwxyza'
  );
});

test('a string with ceasar cipher', function () {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 25)).toEqual(
    'zabcdefghijklmnopqrstuvwxy'
  );
});

test('a string with ceasar cipher', function () {
  expect(caesarCipher('abcdefghijklmnopqrstuvwxyz', 8)).toEqual(
    'ijklmnopqrstuvwxyzabcdefgh'
  );
});

test('a string with ceaser cipher', function () {
  expect(caesarCipher('lorem ipsum', 1)).toEqual('mpsfn jqtvn');
});

test('a string with ceaser cipher, upper case', function () {
  expect(caesarCipher('LOREM IPSUM', 1)).toEqual('mpsfn jqtvn');
});

test('a string with ceaser cipher, punctiation', function () {
  expect(caesarCipher('L.o.r.e.m I!p?s/u$m', 1)).toEqual('m.p.s.f.n j!q?t/v$n');
});
