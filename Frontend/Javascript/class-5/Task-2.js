//TASK 2
// Exercise 2: Guessing Game

// In this game:
// The computer generates a random number between 1 and 100.
// The user has to guess the number.
// The loop continues until the user guesses the correct number, providing feedback if the guess is too high or too low.

    let GuessNumber = parseInt(input, 10); 
if (GuessNumber === randomNumber) {
    console.log("Congratulations! You found the number " + randomNumber);
    rl.close();
} else if (GuessNumber < randomNumber) {
    console.log("The correct number is higher.");
    askGuess();  
} else if (GuessNumber > randomNumber) {
    console.log("The correct number is lower.");
    askGuess();  
} else {
    console.log("Please enter a valid number.");
    askGuess(); 
}


