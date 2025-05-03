function isPalindrome(string) {
  // Start coding here
  const cleanedString = string.replace(/\s+/g, '').toLowerCase();
  return cleanedString ===cleanedString.split('').reverse().join('');
}

//Example case
console.log(isPalindrome("reviver"));// true
console.log(isPalindrome("บวบ"));// true
console.log(isPalindrome("deliver"));// false