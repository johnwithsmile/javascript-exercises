const repeatString = function (string, num) {
  let result = "";
  if (num < 0) {
    return "ERROR";
  } else if (num === 0) {
    return "";
  } else {
    for (let index = 1; index <= num; index++) {
      result = result.concat(string);
    }
    return result;
  }
};

// Do not edit below this line
module.exports = repeatString;
