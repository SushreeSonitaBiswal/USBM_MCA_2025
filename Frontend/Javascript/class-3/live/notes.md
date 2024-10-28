# Switch case:
switch (expression) {
    case value1:
        // Code to be executed if expression equals value1
        break;
    case value2:
        // Code to be executed if expression equals value2
        break;
    // Add more cases as needed
    default:
        // Code to be executed if no cases match
}
# Example:-
switch (new Date) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

  ## Operator

 ## 1. Arithmetic Operators
Used for basic mathematical operations.

+ (Addition)
- (Subtraction)
* (Multiplication)
/ (Division)
% (Modulus)
** (Exponentiation)

# Example
let sum = 5 + 3;         // 8
let product = 5 * 3;     // 15
let power = 2 ** 3;      // 8

## 2. Assignment Operators
Used to assign values to variables.

= (Assign)
+= (Add and assign)
-= (Subtract and assign)
*= (Multiply and assign)
/= (Divide and assign)
%= (Modulus and assign)

# Example
let x = 10;
x += 5;  // x is now 15

## 3. Comparison Operators
Used to compare two values.

== (Equal to)
=== (Strict equal to)
!= (Not equal to)
!== (Strict not equal to)
> (Greater than)
< (Less than)
>= (Greater than or equal to)
<= (Less than or equal to)

# Example
console.log(5 === '5');  // false (strict comparison)
console.log(5 == '5');   // true (loose comparison)

## 4. Logical Operators
Used to combine boolean values.

&& (Logical AND)
|| (Logical OR)
! (Logical NOT)
# Example

let a = true;
let b = false;
console.log(a && b);     // false
console.log(a || b);     // true

## 5. Bitwise Operators
Used to perform operations on binary representations.

& (AND)
| (OR)
^ (XOR)
~ (NOT)
<< (Left shift)
>> (Right shift)
>>> (Unsigned right shift)

# Example:-
let bitwiseAnd = 5 & 3;  // 1 (binary: 0101 & 0011 = 0001)

## 6. Ternary Operator
A shorthand for if...else statements.

# Syntax
condition ? exprIfTrue : exprIfFalse;

# Example
let age = 18;
let canVote = age >= 18 ? "Yes" : "No";  // "Yes"


## 7. typeof Operator
Returns the type of a variable or expression.

# Example
console.log(typeof 42);           // "number"
console.log(typeof 'Hello');      // "string"


  ## 8. Instanceof Operator
Checks if an object is an instance of a specific class or constructor.

# Example
let date = new Date();
console.log(date instanceof Date);  // true

## Relational Operator

Relational operators in JavaScript are used to compare two values and determine their relationship. They evaluate to a boolean value (true or false). Here are the main relational operators:

# Example
1. Equal to (==)
2. Strict Equal to (===)
3. Not Equal to (!=)
4. Strict Not Equal to (!==)
5. Greater Than (>)
6. Less Than (<)
7. Greater Than or Equal To (>=)
8. Less Than or Equal To (<=)





