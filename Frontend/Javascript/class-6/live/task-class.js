// const greetings = (name,time) => {
//     if (time <= 12 ) {
// return `Good morning ${name}`;
//     }
//        else if (time < 18 ) {
//            return `Good afternoon ${name}`;
//         }
     
//        else {
//             return`Good evening ${name}`; 
//     }
// };
//  const output=("Sushree",10);
// console.log(output);

//simple calculator

// const calculator = (a,c,operator) => {
//     switch (operator) {
//       case "+":
//         return `Two number sum = ${a + c}`;
//         break;
//       case "-":
//         return `Two number minus = ${ a - c}`;
//         break;
//       case "*":
//         return `Two number multi = ${ a * c}`;
//         break;
//       case "/":
//         console.log `Two number divide = ${a / c}`;
//         break;
//       case "%":
//         return `Two number modulos = ${ a % c}`;
//         break;
    
//       default:
//         return `Invalid Opperation = ${nothing}`;
//         break;
//     }
// };
// const output = calculator(5,3,'+')
// console.log(output);

 //const add = (a,b) => console.log(add(3,4)) 
 //add() //RANGE ERROR
//const add1 = (a,b) => a+b;
//console.log(add1(5,7));

// const add = (a,b) => {
//     return a+b
//     add()
// };
// const output = add(5,8)
// console.log(output);
//BMI CALCULATOR
// const BMI = (weight,height) => {
//     return weight/(height*height)

// };
// const output = BMI(75,1.25);
// console.log(output);

// //REST parameters

// const printNumbers = (... numbers) => {
//     return numbers;
// }
// let output1 = printNumbers(1,2,3,4,5,6,7,8,9);
// console.log(output1);
//callback function
//Syntax:
// function say(name,callback){
//     console.log ( `My name ${name}`);
//     return callback;
// }
// function hello (){
//     return "hello";
// }
// const output= say("Sushree",hello);
// console.log(output);

//todo : Make a user authentication system using callback function.
 

// setTimeout (Anonymous function())=>{});//callback function//TO delay something //1 second = 1000 milisec

setTimeout(() => {
    console.log("USBM");
}, 5000);

//setInterval(()=>{})
setInterval(() =>{
    console.log("Hey");

},1000);