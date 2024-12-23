## NodeJs
## What?
Javascript Runtime Environment
-> Chrome -> V8-Superfast Engine
->Make compiler

# why?
-> Single language for both Frontend and Backend 
->It is good for real-time application.
e.g(games,chartapp)
->Light weight.
-> It has huge library packages like npm.

## How?

//download POSTMAN

# npm
->Node Package Manager
package/module->npm i

# HTTPS
->get,Post,Put,Patch,Delete
->CRUD operation

## Response Code
->200,400,500 
Informational responses (100 – 199)
Successful responses (200 – 299)
Redirection messages (300 – 399)
Client error responses (400 – 499)
Server error responses (500 – 599)
## e.g : 
201-> Successfully submitted
404-> Page not Found.
500-> Internal Server error.

### class-2
## Installation:Node
->npm init -y
 create a backend project import & export math.js file to index.js 
 using your own outform run command
## fs module(File System)
-To interact between the filesystem.
-It can be async(non-blocking) & sync( block).
## To write and create file 
fs.writefilesync()//For Synchronous file(block)
fs,writefile()//Async(non-blocking)


## cJs
cons fs = require("fs")->cJs

## Create file 
fs.writefilesync("notes.txt")
## avoid override
fs.appendfilesync();
## create folder
fs.mkdirsync();
## read file
fs.readsync();

//Buffer data type->node.js
-Binary code
//buffer to String()

##todo: using fs module in node js 
-Create file
-Append file
-Rename file- fs.renamesync();
-Read   file
-Update file
-Delete file- fs.rmdirSync();

//todo
task: Async  fs,readfile("notes.txt")"utf8"(error)
call back function

task: add,sub,mul,div in another file
task:Research about path & os module.
const path = require("path");
console.log

## gitbash
touch
## powercell
ni

### NB
To solve the re-start server Problem
-nodemon->Package of npm(It does not close the server)
## Install
npm i nodemon

//todo now :home page,contact page,service page,signup page
if no page found set 404 page not found