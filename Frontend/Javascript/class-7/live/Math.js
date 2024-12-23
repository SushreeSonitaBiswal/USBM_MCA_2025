// // // let newArray = [];
// // // console.log(newArray);//[]

// // // console.log(typeof newArray);//Object
// // let name ="Pablo";
// // let age = 60;
// // let profession = "Criminal";
// // let isMarried = true;


// // //Reason for using Array
// // //We need gently under a single variable name
// // //Structured way
// // //code readability
// // //Easy to maintain



// // //Array declaration
// // let userArray = ["Pablo","60","Criminal",true]
// // console.log(userArray);


// // let newNumber = new Array(1,2,3,4);
// // console.log(newNumber);
// // let newNumbers = new Array(1,.5,2.5,5.66,100)
// // console.log(newNumbers);

// // //Create an array and check it's length

// // let Student =["Sush","Jayashree","Satty","Romi"]
// // console.log(Student.length);
// // //Accessing

// let cities = ["bbsr","ctc","Jajpur","Balasore","Bhadrak"]
// // console.log(cities[0]);
// // console.log(cities[4]);

// //Last Element :

// // let  Lastcity = cities.length-2;//4
// // console.log(cities[city]);

// // //Balesore
// // console.log(cities[2]);
// // console.log(cities[Lastcity /2]);
// // console.log(cities[Lastcity -2]);
// // //Array Methods:

// //Modify:
// let modifyCity = "Kendrapara";
// cities[3] = modifyCity;
// console.log(cities)

// //Add
// let a = [1,2,3,4]
// a.push(5);
// console.log(a);

// //Add
// //Push()

// console.log(cities);
// let addCity ="Jagatsinghpur";
// cities.push(addCity);
// console.log(cities);


// //POP
// console.log(cities);
// let removeCity ="Jagatsinghpur";
// cities.pop(removeCity);
// console.log(cities);

// //Shift

// console.log(cities);
// let shiftCity ="Jagatsinghpur";
// cities.shift(shiftCity);
// console.log(cities);

// //Unshift
// console.log(cities);
// let unshiftCity ="Jagatsinghpur";
// cities.unshift(unshiftCity);
// console.log(cities);

// //concat
// let fruits = ["Apple","Orange","Strawberry"];
// let addArray = fruits.concat(["pitch","Mango"]);
// console.log(addArray);

// //includes
// let students = ["Sudhansu","Bikash","Sushree","Jayashree"]
// students.includes("pallavi");
// console.log(students.includes("pallavi"));
// //includes
// let students = ["Sudhansu","Bikash","Sushree","Jayashree","pallavi"]
// let output =students.includes("pallavi");
// console.log(output);

// //Slices()
// let animals =["Tiger","Lion","Dog","Cat"];
// // let slice = animals.slice(2);//Dog,Cat
// // console.log(slice);
// let slice = animals.slice(2,4);//we cannot include end //dog
// console.log(slice);
// slice(1,4)//1,2,3


// //splice
// const months =['Jan','March','April','June'];
//    months.splice(1,0,'Feb');
//  console.log(months);

//  const months =['Jan','March','April','June'];
//  months.splice(1,3,'Jan'); //Jan deleted //3 is the delete number//QWe cannot include end
//  console.log(months);

//for each
//Double the no. of array2
const arr2 = [1,2,3,4,5];
// for(i=0,i<=array2.length;i++)
// {
//const doubled = arr2[]
// }
//foreach()
arr2.forEach((element,i) => {
    console.log(element*2,i)
});
