// 3rd Highest Number in Array
//Having an array of numbers, write an algorithm that will return the 3rd highest number in the array. 
//Your algorithm should do only one iteration of the array (just one for/while loop).

//Example:

//Using the array [5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31], the correct answer is : 11

function thirdHighest(array) {
    let first =0;
    let second=0;
    let third=0;

    for(let i=0; i<array.length; i++){

        if(array [i]>first){
            third = second;
            second =first;
            first =array [i]

        } else if (array [i] >second){
        third = second;
        second =array[i]

        }else if(array[i]>third){
        third = array[i]
        }
   

    }
return third;
}
console.log(thirdHighest([5, 2, 8, 20, -2, 0, 11, 7, 3, 9, 31]));

