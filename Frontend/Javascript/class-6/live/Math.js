//FUNCTION
//Write a function to print your name
// function PrintName(){

// console.log(`My name is Sushree`);
// }
//  PrintName();//Invokation or call of function
 

 //Syllabus in USBM speak in outside
 //Arguments AND Parameters

//  function printName(name){//name is the parameter
//     console.log(`My name is ${name}`);
//  }
//  printName("Sush");//sush is the arguments  //It must be relevant

//  //Age & City
//  function printName(name,age,city){  //name is the parameter
//     console.log(`My name is ${name} ,My city is ${city} ,My age is ${age}`);
//  }
//  printName("Sush",21,"bbsr");


 //'return' keyword
 //Stop the execution process
 //Returned the value to the caller


//  function printName(name,age,city){
//     return(`My name is ${name} ,My city is ${city} ,My age is ${age}`);
//  }

// console.log(printName("Sushree",21,"bbsr"));//Invoke or call
 
// //Stop by return keyword
// function printName(name,age,city){
//     return(`My name is ${name} ,My city is ${city} ,My age is ${age}`);
//     console.log("I am stop here")
//  }

// //console.log(printName("Sushree",21,"bbsr")); //Invoke or call //printName is the caller
// let output = printName("Sushree",21,"bbsr");
// console.log(output);
//Dis-adv //FUNCTION HOISTING
// printName()
//  function printName(name,age,city){
    // return(`My name is ${name} ,My city is ${city} ,My age is ${age}`);
 //}

//console.log(printName("Sushree",21,"bbsr"));
 //ES6+
//Arrow function
//Syntax://Referrence error

console.log(printName("Sushree"));
const printName = (name)=>{ //const  for constant value //=> for fat arrow
    return(`My name is ${name}`);
}
console.log(printName("Sushree")); //call
//In short 
//Done wd the basics 
//Callback
//HOF
//Promise
//
