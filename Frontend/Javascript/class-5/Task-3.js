////TASK-3
// Exercise 3: Word Counter
// In this exercise:

// The user inputs a sentence.

// We count the number of words in the sentence.

// let userInput = parseInt("Enter your sentence");
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