function telephoneCheck(str) {
  // Regular expression for valid US phone number formats
  const regex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

  return regex.test(str);
}

console.log(telephoneCheck("555-555-5555")); // Output: true
console.log(telephoneCheck("(555)555-5555")); // Output: true
console.log(telephoneCheck("(555) 555-5555")); // Output: true
console.log(telephoneCheck("555 555 5555")); // Output: true
console.log(telephoneCheck("5555555555")); // Output: true
console.log(telephoneCheck("1 555 555 5555")); // Output: true
console.log(telephoneCheck("800-692-7753")); // Output: true
console.log(telephoneCheck("8oo-six427676;laskdjf")); // Output: false
