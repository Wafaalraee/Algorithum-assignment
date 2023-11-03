//Factorialize a Number
//Declare a function factorialize(n) that takes an integer n as input and returns the factorial of the provided integer.

//If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

//Factorials are often represented with the shorthand notation n!

//For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

//Example Outputs:
//factorialize(0) should return 1.
//factorialize(10) should return 3628800.
//factorialize(20) should return 2432
function factorialize(num) { if (num < 0) { return -1; 
} else if (num === 0) { return 1; 
} else { return (num * (factorialize(num -1))); 
} 
}
 factorialize(5);
 console.log(factorialize(5))