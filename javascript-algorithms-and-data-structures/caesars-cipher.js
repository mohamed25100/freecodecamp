function rot13(str) {
  return str.replace(/[A-Z]/g, (char) => {
    const charCode = char.charCodeAt(0);
    let decodedCharCode;
    
    if (charCode >= 65 && charCode <= 77) {
      decodedCharCode = charCode + 13;
    } else if (charCode >= 78 && charCode <= 90) {
      decodedCharCode = charCode - 13;
    } else {
      decodedCharCode = charCode; // Non-alphabetic characters
    }
    
    return String.fromCharCode(decodedCharCode);
  });
}

console.log(rot13("SERR PBQR PNZC")); // Output: "FREE CODE CAMP"
