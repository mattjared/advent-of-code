const data = require("./cleanData");

let sumOfAllNumbers = 0;

data.forEach(element => {
  const onlyNumbers = element.match(/\d/g) || [];
  const newStringDigit = onlyNumbers[0] + onlyNumbers[onlyNumbers.length - 1];
  const newDigit = parseInt(newStringDigit, 10)
  sumOfAllNumbers += newDigit;
  console.log(sumOfAllNumbers);
}); 

console.log(sumOfAllNumbers);

