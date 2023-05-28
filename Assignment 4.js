const arrMax = (numbers) => {
  let maxNumber = -Infinity;
  numbers.forEach((number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
};

const numbers = [5, 8, 25, 10, 3];
const largestNumber = arrMax(numbers);
console.log("Largest number:", largestNumber);
