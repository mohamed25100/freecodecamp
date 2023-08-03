function palindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
  // Compare the original string with its reverse
  return str === str.split('').reverse().join('');
}

console.log(palindrome("eye")); // Should return true
console.log(palindrome("racecar")); // Should return true
console.log(palindrome("RaceCar")); // Should return true
console.log(palindrome("2A3*3a2")); // Should return true
console.log(palindrome("hello")); // Should return false
