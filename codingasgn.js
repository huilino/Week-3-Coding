// 1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93

let ages = [3, 9, 23, 64, 2, 8, 28, 93];
// a) subtract the value of first element from the last element in array

let substract = ages[ages.length -1] - ages[0];
console.log('1a : ' + substract);

// b) Add new age to array
 ages.push(33);
console.log(ages);

substract = ages[ages.length -1] - ages[0];
console.log('1b : ' + substract);

// c) Use loop to iterate through the array and calculate
// average age.
 let totalAge = 0 ;
for(let i=0; i< ages.length; i++){
    totalAge += ages [i];
}
let averageAge = totalAge/ages.length;
console.log('1c : ' + averageAge);

// 2.2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names=['Sam' , 'Tommy' , 'Tim' , 'Sally' , 'Buck' , 'Bob'];
console.log(names);

// a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
let sum = 0;
for (let i = 0; i < names.length ; i++){
    sum += names[i].length;
}

let average = sum/names.length;
console.log('2a :' + average);

// b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.
let combined=names.join(" , ");
for (let i = 0; i < names.length ; i++){
}
console.log('2b :' + combined);

// 3.	How do you access the last element of any array?
let car = ['Honda','Toyota','Subaru'];
console.log('3. Last Element in the array: ' + car[car.length-1]);

// 4.	How do you access the first element of any array?
console.log('4. First Element in the array: ' + car[0]);

// 5.	Create a new array called nameLengths
nameLengths = [5, 3, 4];
namesArray = ["Kelly", "Sam", "Kate"];
// Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array
let newLengths = [];
for(let i=0 ; i< namesArray.length ; i++){
     newLengths.push(namesArray[i].length);
 }
 console.log('5. ' + newLengths);

 let join = [].concat(nameLengths, newLengths);
 console.log('5.New nameLengths array is ' + join);
 
//  6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console
let totalSum = 0;
for (let i=0; i<join.length ; i++){
    totalSum += join[i] ;
}
console.log("6. Sum of all the elements is " + totalSum + '.');

// 7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
let repeat = function(word, n) {
    let array = [];
    for(let i = 0; i < n; i++ )
        array.push(word);
    return array.join('');
}
console.log('7. '+ repeat('Hello! ' , 5));

// 8.	Write a function that takes two parameters, firstName and lastName, and returns a full name 
function createFullName(firstName , lastName){
    return 'My name is ' + firstName + ' ' + lastName + '.';
}
console.log ('8. ' + createFullName('Lynn', 'Olson'));

// 9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100

function isGreaterThan100(numbers){
let sumOfArray = 0;
     for(let i=0 ; i < numbers.length; i++)
     {
         sumOfArray+=numbers[i];
     }
     return sumOfArray > 100;
  
}
console.log('9. ' + isGreaterThan100([10,10,10,10]));

// 10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.
function averageArray(numArray){
    let a = 0;
    for (let i = 0; i < numArray.length; i++){
        let averageNumber = numArray[i] / numArray.length;
        a += averageNumber    
    }
    return a;
}
console.log("10. The average of all the elements is " + averageArray([1, 2, 3, 4, 5]) + '.');

// 11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.
let array = [2,2,2,2,2];
let array2 = [1,1,1,1,1];

function compareAve(lin1, lin2){
  
let total1=array.reduce((acc,curr)=>{
    acc += curr;
    return acc;

},0)
let arrAvg1= total1/array.length;
    console.log('Average for array1 is '+ arrAvg1);

let total2 = array2.reduce((acc,curr)=>{
        acc += curr;
        return acc;
    
},0)
    let arrAvg2= total2/array2.length;
        console.log('Average for array2 is '+ arrAvg2);


        return arrAvg1 > arrAvg2 ; 
}
console.log('11. ' + compareAve(array, array2));
 

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside,
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket){
  
    if(isHotOutside == 'true'  && moneyInPocket > 10.50 ){
        return true;
    } else {
        return false;
    }
}
console.log('12. ' + willBuyDrink('true', 5));


// 13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.
// User will input the profit for each category and it will return the maximum profit
 function largestProfit (numArray){
     let max = numArray[0];
     for(let i=0; i<numArray.length; i++){
         let profit = numArray[i];
         if (profit > max){
             max = profit ;
         }
     }
     return max;
 }
 let profit1 = [1500, 5500, 2250, 4150];
 console.log('13. The maximum profit is ' + (largestProfit(profit1)));