//1. Addition

//Add all the values between 200 and 2700 (inclusively) that are divisible by 3 or 5,
// but not both 3 and 5.
// To solve this task you might want to use the modulus operato
  
  
  let result1 = 0;
for (var i = 200; i <= 2700; i++) {
    if (!(i % 3===0 && i%5=== 0) && (i%3===0 || i%5===0)){
        result1= result1+i
    } 
}
console.log(result1);

//2. Shift the Values

//Given any array X, for example [2,1,6,4,-7], 
//create an algorithm that shifts each number by one to the front.
// When your program is done the output for array [2,1,6,4,-7] should be [-7,4,6,1,2].

function shiftArrayToFront(arr) {
  if (arr.length <= 1) {
    return arr; // Nothing to shift for arrays with 0 or 1 elements
  }

  const lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}

const originalArray = [2, 1, 6, 4, -7];
const shiftedArray = shiftArrayToFront(originalArray);

console.log("Original Array:", originalArray);
console.log("Shifted Array:", shiftedArray);

//3. FizzBuzz

//Create an algorithm that inserts the numbers from 1 to 135 into an array,
 //while replacing the values that are divisible by 3 with the word "Fizz", 
 //the numbers that are divisible by 5 with the word "Buzz",
 // and the numbers that are divisible with 3 and 5 with the word "FizzBuzz".
 // Your output should look like [1,2, 'Fizz',4, 'Buzz', 'Fizz',7, 8, ...]



 function generateFizzBuzzArray(n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}

const n = 135;
const fizzBuzzArray = generateFizzBuzzArray(n);

console.log(fizzBuzzArray);




 //4. Fibonacci

//For a Fibonacci sequence starting at 0 and 1 add up all the values below 1,000,000.

//A Fibonacci sequence is an infinite series of numbers that is created by adding the last two numbers in the series.
// A series would start with the numbers 0 and 1 in place, 
//followed by 1 (0+1), 2 (1+1), 3 (1+2), 5 (3+2), etc.

//0 1 1 2 3 5 8 13 21...

function sumFibonacciNumbers(limit) {
  let a = 0;
  let b = 1;
  let sum = 0;

  while (a + b < limit) {
    let c = a + b;
    if (c % 2 === 0) {
      sum += c;
    }
    a = b;
    b = c;
  }

  return sum;
}

const limit = 1000000;
const result = sumFibonacciNumbers(limit);

console.log("Sum of even Fibonacci numbers below 1,000,000:", result);

//5. Remove the Negative

//Given any array X, for example [1,-2,4,1], 
//remove the negative numbers, so that the output becomes: [1,4,1].

function removeNegativeNumbers(arr) {
  return arr.filter((num) => num >= 0);
}

const inputArray = [1, -2, 4, 1];
const resultArray = removeNegativeNumbers(inputArray);

console.log("Result:", resultArray);



//6. Communist Censorship

//Given the array of strings X = ['Man', 'I','Love','The','Matrix','Program'],
// replace every letter of the word Program with *,
// so the output would be ['Man', 'I','Love','The','Matrix','*******']. 
//Then make your algorithm work for any word of your choice


function replaceWordWithAsterisks(arr, wordToReplace) {
  return arr.map((word) => {
    if (word === wordToReplace) {
      return '*'.repeat(word.length);
    } else {
      return word;
    }
  });
}

const inputArray1 = ['Man', 'I', 'Love', 'The', 'Matrix', 'Program'];
const wordToReplace = 'Program';

const resultArray1 = replaceWordWithAsterisks(inputArray1, wordToReplace);

console.log("Result:", resultArray1)





