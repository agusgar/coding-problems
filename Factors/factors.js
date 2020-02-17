// Between two sets problem
// https://www.hackerrank.com/challenges/between-two-sets/problem

function isFactorOf(number1, number2) {
  return number2 % number1 === 0;
}

function isFactorOfAll(array, number) {
  return array.length !== 0 && array.every(item => isFactorOf(number, item));
}

function areAllFactorsOf(array, number) {
  return  array.length !== 0 && array.every(item => isFactorOf(item, number));
}

function getFactors(a, b) {
  const sortedA = a.sort((num1,num2) => num1 - num2);
  const sortedB = b.sort((num1,num2) => num1 - num2);
  
  const maxA = sortedA.slice(-1)[0];
  const minB = sortedB[0];

  let factors = [];
  for (let i = maxA; i <= minB; i++) {
      if (areAllFactorsOf(sortedA, i) && isFactorOfAll(sortedB, i)) {
          factors.push(i);
      }
  }
  
  return factors;
}

module.exports = { getFactors, isFactorOfAll, areAllFactorsOf };  
