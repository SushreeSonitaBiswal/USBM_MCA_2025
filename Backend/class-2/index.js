
// //Import modules
// // const math = require("./math")
// //CJs method

// // custom modules
// // console.log(math.add(2,3));
// // console.log(math.sub(20,3));
// // console.log(math.mul(4,3));
// // console.log(math.div(8,3));


// const fs = require("fs");
// //inbuilt modules
// console.log(fs);


// // let data;
// fs.writeFileSync("notes.txt", "I'm learning backend");
// // fs.writeFile("new.txt","This is an async file");
// // fs.writeFileSync("README.txt","Sync file");

// // //append file
//   fs.appendFileSync("notes.txt", "im sushree");
// // //To interact with file we need filesystem.
// // //   console.log(data.toString());
// //   //Create file
// //   fs.mkdirSync("file.js");

// //   //Rename file
//   fs.renameSync("file.js","node.js");

// //   //Delete file
//   fs.rmdirSync("file.js");
// //Async function

//Callback function :-In js  a callback function passed into another function as an argument.
// to executed later when you pass a callback function into another function,you just
//pass the reference of the function i.e the function name without the parenthesis().
  const fs = require('fs');

//Create a folder using async function
  // fs.mkdir('Data',(error) =>{  //fs.mkdir is a function and (error)  is an argumen{
  //   console.log(error)
  
  // });
  //fs.mkdir('Data',callBackFunc) 
  //function callBackFunc(){
  // }
 

  //create a file using async function

//   fs.writeFile('Data/read.txt','Today,we are using Nodejs async function'
//     ,(error)=>{
// console.log('File is created');
// console.log(error);
//   });

//Append data(Updating data)

// fs.appendFile('Data/read.txt','Async Js is amazing'
// ,(error)=>{
//   console.log(error);
//   console.log('Data become updates');
// });

//Read file
fs.readFile('Data/read.txt','utf8',(error,data)=>{
console.log('The data is' + data);
console.log(error);
});
 
//Delete the folder and file that we a re created
fs.unlink('Data/read.txt',(error)=>{
  console.log("This file has removed");
  console.log(error);
});
//For remove folder(Data)
fs.rmdir('Data',(error)=>
{
  console.log('This folder hasbeen removed');
  console.log(error);
});