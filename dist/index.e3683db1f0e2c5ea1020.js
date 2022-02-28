(self["webpackChunkttd"] = self["webpackChunkttd"] || []).push([["index"],{

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => a / b,
};

console.log(calculator.add(4, 2));

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

function analyzeArray(...array) {
  const object = {};
  object.average =
    array.reduce((first, second) => first + second, 0) / array.length;
  object.min = Math.min(array);
  object.max = Math.max(array);
  object.length = array.length;

  console.log(object);
}

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZTM2ODNkYjFmMGUyYzVlYTEwMjAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHFCQUFxQix5QkFBeUI7QUFDOUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHRkLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNhbGN1bGF0b3IgPSB7XG4gIGFkZDogKGEsIGIpID0+IGEgKyBiLFxuICBzdWJ0cmFjdDogKGEsIGIpID0+IGEgLSBiLFxuICBtdWx0aXBseTogKGEsIGIpID0+IGEgKiBiLFxuICBkaXZpZGU6IChhLCBiKSA9PiBhIC8gYixcbn07XG5cbmNvbnNvbGUubG9nKGNhbGN1bGF0b3IuYWRkKDQsIDIpKTtcblxuLy8gbGV0IG5ld1N0cmluZyA9IFtdO1xuLy8gZnVuY3Rpb24gY2Vhc2VyQ2lwaGVyKHN0cmluZywga2V5KSB7XG4vLyAgIC8vIGNvbnN0IGFscGhhYmV0ID0gJ0FCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaJztcbi8vICAgY29uc3QgYWxwaGFiZXQgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonO1xuLy8gICBjb25zdCBzdHJpbmdMb3dlckNhc2UgPSBzdHJpbmcudG9Mb3dlckNhc2UoKTtcbi8vICAgY29uc3Qgc3RyaW5nU3BsaXQgPSBzdHJpbmdMb3dlckNhc2Uuc3BsaXQoJycpO1xuLy8gICBjb25zb2xlLmxvZyhzdHJpbmdTcGxpdCk7XG5cbi8vIGZvciAoY29uc3QgZWxlbWVudCBvZiBzdHJpbmdTcGxpdCkge1xuLy8gICBjb25zb2xlLmxvZyhhbHBoYWJldC5pbmRleE9mKGVsZW1lbnQpKTtcbi8vIH1cblxuLy8gICBmb3IgKGxldCBpID0gMDsgaSA8PSBzdHJpbmdTcGxpdC5sZW5ndGg7IGkrKykge1xuLy8gICAgIGNvbnNvbGUubG9nKGFscGhhYmV0LmluZGV4T2Yoc3RyaW5nU3BsaXRbaV0pKTtcblxuLy8gICAgIGNvbnN0IG5ld0EgPSBhbHBoYWJldC5pbmRleE9mKHN0cmluZ1NwbGl0W2ldKTtcbi8vICAgICBpZiAobmV3QSA9PT0gLTEpIHtcbi8vICAgICAgIGNvbnN0IG5ld0MgPSBzdHJpbmdTcGxpdFtpXTtcbi8vICAgICAgIGNvbnNvbGUubG9nKG5ld0MpO1xuLy8gICAgICAgbmV3U3RyaW5nLnB1c2gobmV3Qyk7XG4vLyAgICAgICBjb25zb2xlLmxvZyhuZXdTdHJpbmcpO1xuLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgICBjb25zdCBuZXdCID0gYWxwaGFiZXQuY2hhckF0KG5ld0EgKyBrZXkpO1xuLy8gICAgICAgbmV3U3RyaW5nLnB1c2gobmV3Qik7XG4vLyAgICAgICBjb25zb2xlLmxvZyhuZXdTdHJpbmcpO1xuLy8gICAgIH1cbi8vICAgfVxuXG4vLyAgIHJldHVybiBuZXdTdHJpbmcuam9pbignJyk7XG4vLyB9XG5cbi8vIGNvbnNvbGUubG9nKGNlYXNlckNpcGhlcignbG9yZW0gaXBzdWx1bSEyMTN6JywgMSkpO1xuXG4vLyBjb25zb2xlLmxvZygnZGVuZW1lJy5zcGxpdCgnJykpO1xuXG5mdW5jdGlvbiBhbmFseXplQXJyYXkoLi4uYXJyYXkpIHtcbiAgY29uc3Qgb2JqZWN0ID0ge307XG4gIG9iamVjdC5hdmVyYWdlID1cbiAgICBhcnJheS5yZWR1Y2UoKGZpcnN0LCBzZWNvbmQpID0+IGZpcnN0ICsgc2Vjb25kLCAwKSAvIGFycmF5Lmxlbmd0aDtcbiAgb2JqZWN0Lm1pbiA9IE1hdGgubWluKGFycmF5KTtcbiAgb2JqZWN0Lm1heCA9IE1hdGgubWF4KGFycmF5KTtcbiAgb2JqZWN0Lmxlbmd0aCA9IGFycmF5Lmxlbmd0aDtcblxuICBjb25zb2xlLmxvZyhvYmplY3QpO1xufVxuXG5jb25zb2xlLmxvZyhhbmFseXplQXJyYXkoWzEsIDgsIDMsIDQsIDIsIDZdKSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=