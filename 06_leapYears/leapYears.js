// 윤년은 4로 나누어 떨어지는 해임. 하지만 100으로 나누어 떨어지면 예외, 하지만 400으로 나누어 떨어지면 다시 윤년임.
const leapYears = function (years) {
  if (years % 400 === 0) {
    return true;
  } else if (years % 100 === 0) {
    return false;
  } else if (years % 4 === 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
