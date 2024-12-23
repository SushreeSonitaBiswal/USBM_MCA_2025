// path module
const path = require("path");
console.log(path);

const rootDir = path.resolve(__dirname ,"..");
console.log(rootDir);//C:\Users\sushr\OneDrive\Desktop\USBM_MCA_2025\Backend

// //adding paths
// console.log(path.join("class-1","path.js"));//class-1\path.js
// // Add complete path

// console.log(path. basename());//Node.js v22.12.0
// console.log(path.extname());
// console.log(path.dirname());

//Add 3 Classes in rootdir
console.log(path.join(rootDir,"abc","xyz","123") );


