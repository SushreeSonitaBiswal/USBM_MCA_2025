//let num7 = "sushree";
//  let num8 = 10;
//  console.log (num7/num8);
//  let num9 = 0;
//  let num10 = 10;
//  console.log(num9/num10);
//  console.log(num10/num9); 

// //  Boolean
// let isStudent = True;
// let isTeacher = False;
// console.log(isStudent);
// console.log(isTeacher);
let userInput = "This is a string value.";
console.log("You entered: " + userInput);

let count = 0;
let inWord = false; 

for (let i = 0; i < userInput.length; i++) {
    
    if (userInput[i] !== ' ') {
        if (!inWord) {
            count++; 
            inWord = true; 
        }
    } else {
        inWord = false; 
    }
}

console.log("The total number of words in the input is: ", count);