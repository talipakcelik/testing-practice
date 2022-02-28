// calculator = {
//   add: (a, b) => a + b,
//   subtract: (a, b) => a - b,
//   multiply: (a, b) => a * b,
//   divide: (a, b) => a / b,
// };

// console.log(calculator.add(4, 2));

// let newString = [];
// function ceaserCipher(string, key) {
//   // const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//   const alphabet = 'abcdefghijklmnopqrstuvwxyz';
//   const stringLowerCase = string.toLowerCase();
//   const stringSplit = stringLowerCase.split('');
//   console.log(stringSplit);

// for (const element of stringSplit) {
//   console.log(alphabet.indexOf(element));
// }

//   for (let i = 0; i <= stringSplit.length; i++) {
//     console.log(alphabet.indexOf(stringSplit[i]));

//     const newA = alphabet.indexOf(stringSplit[i]);
//     if (newA === -1) {
//       const newC = stringSplit[i];
//       console.log(newC);
//       newString.push(newC);
//       console.log(newString);
//     } else {
//       const newB = alphabet.charAt(newA + key);
//       newString.push(newB);
//       console.log(newString);
//     }
//   }

//   return newString.join('');
// }

// console.log(ceaserCipher('lorem ipsulum!213z', 1));

// console.log('deneme'.split(''));

// function analyzeArray(...array) {
//   const object = {};
//   object.average =
//     array.reduce((first, second) => first + second, 0) / array.length;
//   object.min = Math.min(array);
//   object.max = Math.max(array);
//   object.length = array.length;

//   console.log(object);
// }

// console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
