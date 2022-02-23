function capitalize(string) {
  const v1 = string.toLowerCase();
  return v1.charAt(0).toUpperCase() + v1.slice(1);
}

module.exports = capitalize;
