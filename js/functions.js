/* eslint-disable no-console */


function comparisonString(string, length) {
  return string.length <= length;
}

console.log(comparisonString('safadsf', 3));


function isPalindrom(string) {
  const newString = string.replaceAll(' ', '').toLowerCase();

  for (let i = 0; i < newString.length / 2; i++) {
    if(newString.at(i) !== newString.at(-i - 1)){
      return false;
    }
  }
  return true;
}

console.log(isPalindrom('привет кто ты'));
console.log(isPalindrom('довод'));
console.log(isPalindrom('ДовОд'));
console.log(isPalindrom('топот'));


