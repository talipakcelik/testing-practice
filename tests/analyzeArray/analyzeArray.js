function analyzeArray(array) {
  const object = {};

  object.average =
    array.reduce((first, second) => first + second, 0) / array.length;
  object.min = Math.min(...array);
  object.max = Math.max(...array);
  object.length = array.length;

  return object;
}

export default analyzeArray;
