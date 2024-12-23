// //ForEach()
// function sayHello( () => {}) {
// //
// }
// let arr = ["A","B","R","S","J","P"];
// for(let i=0;i<=arr.length;i++)
// {
// console.log(arr[i]);
// }
//Using forEach()//Element//Index
 let arr = ["A","B","C","D","E"]
 arr.forEach((element,j) =>{
console.log(element);
 });//First Elenent,2Nd one is index


// //Array.map()
// let arr = ["A","B","C","D","E"]
// arr.map((element,j) =>{
//     //console.log(element);
//     console.log(element.toLowerCase());
// });

// //Array.map()
// let arr = ["A","B","C","D","E"]
// const newArr = arr.map((element,j) =>{
//     return element.toLowerCase();
    
// });
// // //console.log(newArr);//We donn't declare the function like normal function.
// let arr = ["A","B","C","D","E"]  const newArr = arr.map((element) =>{
//   const odd = return element%2!=0();
    
// });
// console.log(odd)

 
//Array.Filter()
let numArr = [1,2,3,4,5,6,7]
//Filter out the odd no.s
const oddNumbers = numArr.filter((element) =>{
return element%2!==0;
});
console.log(oddNumbers);

//OBJECT 
//(Key-Value)->pairs
//Traditional way Object-literal
// let Student = {
//     name:"Pramod",//name =key //Pramod = value
//     age:25,
//     batch:"B.Tech",
//     roll_no : 21,

// }
// console.log(typeof Student);
//Key- store any datatypes
 //Object is meaningful than Array

 //Constructor//To cteate multiple object
 const Student = new Object();
 Student.name = "Sushree";
 Student.age = 21;
 Student.batch = "MCA";
 Student.roll = 145;
 console.log(Student);
 

 //Accessing Element
 //Bracket notation([])
 //.Notation(.)

 //Want to access student name?
 console.log(Student["name"]);
 console.log(Student.name);

 //Modify element
 Student.name ="Pablo";
 console.log(Student.name);
 console.log(Student["name"]);
 
 //Acess notation
 let person = { //const
    name:"Sushree",
    age:21,
    roll:145,
 };


 