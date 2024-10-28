// // let newArray = [];
// // console.log(newArray);//[]

// // console.log(typeof newArray);//Object
// let name ="Pablo";
// let age = 60;
// let profession = "Criminal";
// let isMarried = true;


// //Reason for using Array
// //We need gently under a single variable name
// //Structured way
// //code readability
// //Easy to maintain



// //Array declaration
// let userArray = ["Pablo","60","Criminal",true]
// console.log(userArray);


// let newNumber = new Array(1,2,3,4);
// console.log(newNumber);
// let newNumbers = new Array(1,.5,2.5,5.66,100)
// console.log(newNumbers);

// //Create an array and check it's length

// let Student =["Sush","Jayashree","Satty","Romi"]
// console.log(Student.length);
// //Accessing

let cities = ["bbsr","ctc","Jajpur","Balasore","Bhadrak"]
// console.log(cities[0]);
// console.log(cities[4]);

//Last Element :

// let  Lastcity = cities.length-2;//4
// console.log(cities[city]);

// //Balesore
// console.log(cities[2]);
// console.log(cities[Lastcity /2]);
// console.log(cities[Lastcity -2]);
// //Array Methods:

//Modify:
let modifyCity = "Kendrapara";
cities[3] = modifyCity;
console.log(cities)

//Add
let a = [1,2,3,4]
a.push(5);
console.log(a);

//Add
//Push()

console.log(cities);
let addCity ="Jagatsinghpur";
cities.push(addCity);
console.log(cities);


//POP
console.log(cities);
let removeCity ="Jagatsinghpur";
cities.pop(removeCity);
console.log(cities);

//Shift

console.log(cities);
let shiftCity ="Jagatsinghpur";
cities.shift(shiftCity);
console.log(cities);

//Unshift
console.log(cities);
let unshiftCity ="Jagatsinghpur";
cities.unshift(unshiftCity);
console.log(cities);