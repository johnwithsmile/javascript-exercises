const reverseString = function (string) {
  if (string.length === 0) {
    return "";
  }

  let reversed = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reversed += string[i];
  }
  return reversed;
};
// Do not edit below this line
module.exports = reverseString;
// const reverseString = function (string) {
//     let splittedString = string.split("");
//     if (splittedString.length === 0) {
//       return "";
//     }
//     return splittedString.reverse().join("");
//   };

//   // Do not edit below this line
//   module.exports = reverseString;
