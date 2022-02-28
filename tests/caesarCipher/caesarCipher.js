function caesarCipher(string, key) {
  const alphabet =
    'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz';
  const stringLowerCase = string.toLowerCase();
  const stringSplit = stringLowerCase.split('');

  let newString = [];

  for (let i = 0; i <= stringSplit.length; i++) {
    const newA = alphabet.indexOf(stringSplit[i]);
    if (newA === -1) {
      const newC = stringSplit[i];
      newString.push(newC);
    } else {
      const newB = alphabet.charAt(newA + key);
      newString.push(newB);
    }
  }

  return newString.join('');
}

module.exports = caesarCipher;
