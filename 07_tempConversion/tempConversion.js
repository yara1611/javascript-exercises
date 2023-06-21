const convertToCelsius = function(tmp) {
  return Math.round(tmp-32)
};

const convertToFahrenheit = function(tmp) {
  return Math.round(tmp+32)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
