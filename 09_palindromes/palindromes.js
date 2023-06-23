const palindromes = function (string) {
 const givenString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
 return givenString.split('').reverse().join('') === givenString
};

// Do not edit below this line
module.exports = palindromes;
