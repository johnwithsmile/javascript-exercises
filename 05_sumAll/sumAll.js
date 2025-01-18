const sumAll = function (number1, number2) {
  // 음수 또는 정수가 아닌 경우 처리
  if (
    number1 < 0 ||
    number2 < 0 ||
    !Number.isInteger(number1) ||
    !Number.isInteger(number2)
  ) {
    return "ERROR";
  }

  // 두 숫자 사이의 합계 계산
  let start = Math.min(number1, number2);
  let end = Math.max(number1, number2);
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }

  return sum; // 합계를 반환
};
// Do not edit below this line
module.exports = sumAll;
