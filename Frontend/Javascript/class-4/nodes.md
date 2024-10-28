# Math in Javascript
-> Math is an in-built function  in Js

## Round:-
# Rounds a number to the nearest integer.If the fractional part is 0.5 or greater, it rounds up; otherwise, it rounds down.

# Example:-
->  console.log(Math.round(addition));
-> console.log(Math.round(0.000012));   //0
-> console.log(Math.round(12.000012));  //12
 ->  console.log(Math.PI);  //3.14159653589793

## Square root:-In JavaScript, you can calculate the square root of a number using the Math.sqrt() function. Here’s how it works:
-> console.log(num1 ** 2); //pow
-> console.log(Math.pow(35));//NaN    
-> console.log(Math.pow(5,3));//125

 ## sqrt:- The square root function, Math.sqrt(), in JavaScript is used to calculate the square root of a number.
-> console.log(Math.sqrt(25));//sqrt

## Ceil value :- In JavaScript, the Math.ceil() function is used to round a number up to the nearest integer. This means that regardless of the decimal part, Math.ceil() will always round up.

# Syntax:- Math.ceil(x)
# Example:
->let number = 98.75;
->console.log(Math.round(325.49));
-> console.log(Math.ceil(325.49));
-> console.log(Math.ceil(325.25));

## Floor value:-In JavaScript, the Math.floor() function is used to round a number down to the nearest integer. This means that it takes the largest integer less than or equal to the given number.

# Syntax:-
Math.floor(x)

# Example
console.log(Math.floor(4.9));  // 4
console.log(Math.floor(4.1));  // 4
console.log(Math.floor(-4.1)); // -5
console.log(Math.floor(-4.9)); // -5


# Example of Math.round:-
->console.log(Math.round(325.85)); //326
-> console.log(Math.round(325.5)); //it greater than 0.5

## Max :- In JavaScript, you can find the maximum value among numbers using the Math.max() function. This function returns the largest of zero or more numbers provided as arguments.

# Syntax :-
 Math.max(value1, value2, ..., valueN)

-> console.log(Math.max(10,20,30,56.87)); //56.87
-> console.log(Math.min(20,30,40,56.87));  //20

## Absolute :- In JavaScript, the absolute value of a number can be calculated using the Math.abs() function. This function returns the non-negative value of a number, effectively removing any negative sign.

# Syntax 
-> Math.abs(x)

# Example 
->console.log(Math.abs(-0.000456))

->console.logs(Math.random());

## LOGIC

## randomNumber = Math.floor(Math.random()*(final - start + 1))+ start;
##  total_number = (final - start +1)

 
## Dates: to create date object

 let date = new Date();
console.log(date);//
console.log(date.toISOString());//2024-10
console.log(date.getDate());//15
console.log(date.getFullYear());//2024
console.log(date.getMinutes());//27
console.log(date.getSeconds());//33
console.log(date.getDay());
console.log(date.getMonth() + 1 );


## ceil value
-> +1
## Floor value
-> fix value 
# 0=sunday
# 1= Monday

## npm cache clean --force
