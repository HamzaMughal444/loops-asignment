// Create an array of fruits like ["apple", "banana", "cherry"] and use a loop to log each fruit 
// in the console.

// let fruits = ["apple" , "banana" , "cherry"]

// for (let i = 0; i < fruits.length; i++){
//     console.log(fruits[i]);   
// }

// Given an array of colors ["red", "green", "blue"], use a loop to add all the color names to 
// a paragraph with the ID output using document.querySelector. 


// let result = document.querySelector("#result")

// let colors = ["red", "green", "blue" , "yellow" , "purple"]

// for (let i = 0; i < colors.length; i++){
//     result.innerHTML += `<p>${colors [i]}</p>`
// }

// Use a for loop to print numbers from 1 to 10 in the browser console. 

// for (let i = 1; i <= 10; i++){
//     console.log(i);  
// }

// Use a while loop to print numbers from 5 to 1 in the console. 

// let i = 1;

// while(i <= 5){
//     console.log(i);
//     i++
// }

// Given an array of names ["Ali", "Sara", "Ahmed"], use a loop to change the text of a div 
// with ID names to show all names separated by commas.

// let names = document.querySelector("#names")

// let name = ["Ali", "Sara", "Ahmed"]

// for (let i = 0; i < name.length; i++){
//     names.innerHTML += `${name [i]} `
// }

// Change the text of a paragraph with ID status to "Loading..." using 
// document.querySelector. 

// var result = document.querySelector("#status")
// result.innerHTML = "Loading... "

//  Use a loop to calculate the sum of numbers in an array [5, 10, 15] and display the total in 
// a paragraph with ID sum. 


// let total = document.querySelector("#total")

// let numbers = [5, 10, 15];
// let calculate = 0
// for(let i = 0; i < numbers.length; i++ ){
//     calculate += numbers[i]
//     total.innerHTML = `total is ${calculate}`
// } 


// Write a loop that counts from 1 to 20 and logs only the even numbers in the console. 

// for (let i = 1; i <= 20; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }

//  Given an array of temperatures [30, 35, 32, 40], use a loop to calculate the average and 
// display it inside an element with ID averageTemp.

// let total = document.querySelector("#total1")

// let numbers = [30, 35, 32, 40];
// let calculate = 0;

// for (let i = 0; i < numbers.length; i++){
//     calculate += numbers[i]
// }
// let average = calculate / numbers.length
// total.innerHTML = `average is ${average}`

// Use a loop to print all values of the array ["dog", "cat", "bird"] into a single paragraph with 
// ID animals. 

// let animal = document.querySelector("#animal")

// let animals = ["dog", "cat", "bird"];
// for (let i = 0; i < animals.length; i++){
//     animal.innerHTML = animals 
// }

// Create a loop that prints all numbers between 1 and 50 that are divisible by 5, and log 
// them to the console.

// for (let i = 1; i <= 50; i++){
//     if(i % 5 === 0){
//         console.log(i);
        
//     }
// }


// . Write a loop that calculates the average of numbers in an array [20, 30, 40, 50]. 

// let numbers =  [20, 30, 40, 50];
// let calculate = 0

// for(let i = 0; i < numbers.length; i++){
//     calculate += numbers[i]
// }

// let average = calculate / numbers.length
// console.log(average);


// Given an array [2, 4, 6, 8, 10], use a loop to create a new array where each value is 
// multiplied by 3. 

// let array =  [2, 4, 6, 8, 10];
// let newArray = []
// for(let i = 0; i < array.length; i++){
//     newArray.push(array[i] * 3)
// }
// console.log(newArray);


// Create a loop that finds the largest number in an array [45, 67, 12, 89, 34].

// let numbers = [45, 67, 12, 89, 34];
// let largest = numbers[0]; 

// for (let i = 1; i < numbers.length; i++) {
//   if (numbers[i] > largest) {
//     largest = numbers[i];
//   }
// }

// console.log( largest);



// Use a loop to count how many numbers in an array [3, 8, 6, 1, 9, 2] are even.

// let numbers = [3, 8, 6, 1, 9, 2];
// let evenCount = 0;

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] % 2 === 0) {

//       console.log(numbers[i]);
//   }
// }





// Loop through an array [1, 3, 5, 7, 9] and count how many elements are greater than 4

// let numbers = [1, 3, 5, 7, 9];
// let count = 0;

// for(let i =0; i < numbers.length; i++){
//     if(numbers[i]  > 4)
//         count++;

// }
// console.log(count);




// Given an array [2, 2, 2, 2, 2], use a loop to check whether all elements are equal.


// let array = [2, 2, 2, 2, 2]
// let x; 
// for(let i = 0; i < array.length; i++){
//     for(let j=0; j < array.length; j++){
//         if(array[i] != array[j]){
//             x = `not`
//             break;
//         }else{
//             x  =`equal`
//         } 
//     }
// }

// console.log(x);



//  Create a loop that counts how many numbers in [5, 10, 15, 20, 25] are greater than or 
// equal to the average of the array. 



// var number = [5, 10, 15, 20, 25];

// let greater = 0;

// for(let i = 0;  i< number.length; i++ ){
//     greater += number[i]
// }console.log(greater / number.length);

// for(let i= 0; i < number.length; i++){
//     if(number[i] > greater / number.length){
//         console.log(number[i]);
        
//     }
// }
