////Exercise 1: Simple Calculator with a Loop
// This task is to create a simple calculator that:
// Asks the user to input two numbers.
// Asks for the operation (+, -, *, /).
// Performs the operation and displays the result.
// Continues until the user types "exit".

let a = parseInt(prompt("Enter the First Number"));

let b = prompt("Enter your opperation like +,-,*,/,%");

let c = parseInt(prompt("Enter your Second number"));

switch (b) {
  case "+":
    console.log("Two number sum = ", a + c);
    break;
  case "-":
    console.log("Two number minus = ", a - c);
    break;
  case "*":
    console.log("Two number multi = ", a * c);
    break;
  case "/":
    console.log("Two number divide = ", a / c);
    break;
  case "%":
    console.log("Two number modulos = ", a % c);
    break;

  default:
    console.log("Invalid Opperation");
    break;
}