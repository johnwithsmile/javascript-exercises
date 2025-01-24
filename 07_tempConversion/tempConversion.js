// 화씨에서 섭씨는 (F-32)* (5/9) = C
// 소숫점 자르기는 number.toFixed(1); 사용한다.
const convertToCelsius = function (number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  const result = (number - 32) * (5 / 9);
  return result === 0 ? 0 : result.toFixed(1);
};

// 섭씨에서 화씨는 (C*(9/5)) + 32 = F
const convertToFahrenheit = function (number) {
  if (typeof number !== "number") {
    throw new Error("Input must be a number");
  }

  const result = number * (9 / 5) + 32;
  return result === 0 ? 0 : result.toFixed(1);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit,
};
