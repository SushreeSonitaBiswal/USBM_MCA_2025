# HOF: Higher order Function
High-order functions are a key part of functional programming, and they're also used quite widely
 in more imperative-style programming. High-order functions allow us to create more generic functions,
  reduce code duplication, and can lead to code that is easier to read and maintain.
# ForEach()
The forEach() method of Array instances executes a provided function once for each array element.
# Example:-
Using forEach()//Element//Index
  let arr = ["A","B","C","D","E"]
 arr.forEach((element,j) =>{
 console.log(sushree);
  });
  # Here element stands for all array elements
  # And j stands for index value.
# Array.map()
The map() method of Array instances creates a new array populated with the results of calling
 a provided function on every element in the calling array.
 # or
 The `map()` method takes an array and applies a function to each item in that array, creating a new array with the results. Think of it like transforming each item—if you had a list of numbers and wanted to double each one, `map()` would give you a new list of those doubled numbers.
 # Example
 let arr = ["A","B","C","D","E"]
 arr.map((element,j) =>{
console.log(element); console.log(element.toLowerCase());
 });//a,b,c,d,e
# or
 //Array.map()
let arr = ["A","B","C","D","E"]
const newArr = arr.map((element,j) =>{
 return element.toLowerCase();  
 });
# Array.Filter()
The filter() method of Array instances creates a shallow copy of a portion of a given array,
 filtered down to just the elements from the given array that pass the test implemented by the provided function.
 # or
 The `filter()` method goes through an array and picks out only the items that meet certain criteria. It creates a new array with just those items. For example, if you have a list of numbers and want only the even ones, `filter()` will give you a new list with just the even numbers.

# Example
//Filter out the odd no.s
let numArr = [1,2,3,4,5,6,7]
const oddNumbers = numArr.filter((element) =>{
return element%2!==0;
});
console.log(oddNumbers);


# //OBJECT 
//(Key-Value)->pairs
# Traditional way is  Object-literal
# name =key & Pramod = value
let Student = {
  name:"Pramod",
  age:25,
  batch:"B.Tech",
  roll_no : 21,

}
console.log(typeof Student); //Object
# Key- store any datatypes
 # Object is meaningful than Array
 # Difference between Object And Array


