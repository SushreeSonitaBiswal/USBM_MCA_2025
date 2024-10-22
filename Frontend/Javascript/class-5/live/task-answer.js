 
// let number = parseInt(prompt("Enter a number:"));  
// let total = 0;
// let num = Math.abs(number); // Handle negative numbers

 
// for (let i = num; i > 0; i = Math.floor(i / 10)) {
//     total += i % 10;  
// }

//console.log("The sum of the digits is:", total);
//OR
//QUESTION 1:-
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number: ", (input) => {
//     let number = parseInt(input); // Convert input to integer
//     let total = 0;
//     let num = Math.abs(number); // Handle negative numbers

//     // Use a for loop to sum the digits
//     for (let i = num; i > 0; i = Math.floor(i / 10)) {
//         total += i % 10; // Add the last digit to total
//     }

//     console.log("The sum of the digits is:", total);
//     rl.close(); // Close the readline interface
// });

//2:- Q2. Print the Fibonacci series up to a given number of terms.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the number of terms for the Fibonacci series: ", (input) => {
//     let terms = parseInt(input);
//     let a = 0, b = 1;

//     console.log("Fibonacci Series:");

//     for (let i = 0; i < terms; i++) {
//         console.log(a); // Print the current term
//         let next = a + b; // Calculate the next term
//         a = b; // Move to the next term
//         b = next; // Update the next term
//     }

//     rl.close(); // Close the readline interface
// });

//- Q3. Write a program that prints the multiplication table of a number using a for loop.
// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter a number to print its multiplication table: ", (input) => {
//     let number = parseInt(input); // Convert input to an integer

//     console.log(`Multiplication Table of ${number}:`);

//     // Use a for loop to generate the multiplication table
//     for (let i = 1; i <= 10; i++) {
//         console.log(`${number} x ${i} = ${number * i}`);
//     }

//     rl.close(); // Close the readline interface
// });




//- Q4. Write a program that prints the first n prime numbers.

// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// rl.question("Enter the number of prime numbers to print: ", (input) => {
//     let n = parseInt(input); 
//     let count = 0; 
//     let num = 2;  

//     console.log(`First ${n} prime numbers:`);

    // Loop until we find n prime numbers
//     for (count = 0; count < n; ) {
//         let isPrime = true;

    
//         for (let i = 2; i <= Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 isPrime = false; // Not a prime
//                 break;
//             }
//         }

//         if (isPrime) {
//             console.log(num);  
//             count++; 
//         }

//         num++;  
//     }
 
// });
//Q1.    *
      // **
      // ***
       //****
       //*****
// for(let i = 1 ; i<= 5 ;i++){
//     let pattern = "";//Empty space
//     for (let j = 1;j <= i; j++){
//         pattern += "*" ;
//     }
//     console.log(pattern);
// }


      // Q2. 
      //***** 
        //****
        //***
        //**
        //*
        
        
        // for(let i = 5 ; i>= 1 ;i--){
        //     let pattern = "";//Empty space
        //     for (let j = 1;j <= i; j++){
        //         pattern += "*" ;
        //     }
        //     console.log(pattern);
        // }

//Q3.    *
     // ***
     //*****
    //*******
   //*********
  
 
   let rows2 = 5; 

   for (let i = 1; i <= rows2; i++) {
       let pattern = ""; 
   
       
       for (let j = 1; j <= rows2 - i; j++) {
           pattern += " "; 
       }
   
       
       for (let j = 1; j <= (2 * i - 1); j++) {
           pattern += "*"; 
       }
       
       console.log(pattern); 
   }
   


//Q4. *
  // ***
 // *****
 //*******
//*********
 //*******
  //*****
   //***
   // *

let rows = 5;


for (let i = rows - 1; i >= 1; i--) {
    
    for (let j = 1; j < i; j++) {
        process.stdout.write(' ');  
    }

  
    for (let j = 1; j <= (2 * rows - (2 * i - 1)); j++) {
       let  pattern =  "*"; 
    }

    console.log();  
}
for (let i = 1; i <= rows; i++) {
    
    for (let j = 1; j < i; j++) {
        let pattern = " ";  
    }

 
    for (let j = 1; j <= (2 * rows - (2 * i - 1)); j++) {
       let pattern = "*";  
    }

    console.log();  
}

// Q5. *****
//     *   *
//     *   *
//     *   *
//     *****

let row = 5;
 let pattern = "*" .repeat(row);
console.log(pattern);


for (let i = 1; i <= row - 2; i++) {
    pattern = " *"; 
    for (let j = 1; j <= row - 2; j++) {
        pattern += " "; 
    }
    pattern += " *"; 
    console.log(pattern);
}

 
pattern = "*".repeat(row);
console.log(pattern);






 