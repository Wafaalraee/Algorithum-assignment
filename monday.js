//1. print 1 -135
//need for loop
//start from 1,end at 135
//call it

for(let i=1; i<=135; i=i+1){
    console.log(i)
}
//2.print odd numbers 1-135=>1,3

//need for loop
//condition to skip one in my loop u= u+2
//call it

for(let u=1; u<=135; u= u+2){
    console.log(u)
}
//3. sum of printed numbers
//new variable to start with
//need for loop//sum the prev sum+new element
//adding astring type
//call it
let sum =0
for( let r=0; r<=135; r++){
    sum= r+sum
    let string = "Number is" + r + "sum :" +sum
    console.log(string)
}
//4. print the element of an array
//have an array
//go through every element to print(forEach)
let array =[1,4,2,12]
array.forEach((a)=>console.log(a))

//5.Find max
//give an array
//creat avariable
//use for loop
//find max value
//Given an array X, write a program that would find the maximum value of the array. 
//Your program should work also work with negative values (eg. X = [2,-3,-1]) and zero.
//call it
let n = [2,-3,-1]
let max = n[0]
for(let i= 0; i<n.lenght; i++){
    if(n[i]>max) max =n[i];
}
console.log(max);

//6.Get Average
//have an array
//print average
//Given an array X, write a program that will return the average value of all elements in the array. 
//For example, for array X = [2,1,3] your output should be 2.
//call it

let y = [2,1,3]
let count = 0;
let total = 0;
for( let i=0; i<y.length; i++){
    if(y[i] !==undefined){
        //legit value
        count++;
        total+=y[i];

    }
}
let avg = total / count;
console.log(avg);

//Eliminate the Negatives
//have an array
//remove all negative numbers and replace them with 0
//Given an array X, write a program that will remove all negative numbers and replace them with a 0.
// For example, for array X = [2,-1,4,-3] the output of your program should be [2,0,4,0].
//call it

let arr =[2,-1,4,-3]
let m = 0;
for(let i=0; i<arr.length; i++){
    if(arr[i]<m){
      arr[i]=0;

    }
}
console.log(arr)

//Number to string
//have array
//turns the negative values to strings
//Write a program that takes an array of numbers and turns the negative values to strings.
// For example, for array X = [1,-4,0,-1] the output should be [1,'Turing,0,'Turing'].
//call it

let Y = [1, -4, 0, -1];
  {
  for (let i = 0; i < Y.length; i++) {
    if (Y[i] < 0) {
       Y[i] = "Turing";
    }
  }
}

console.log(Y);


