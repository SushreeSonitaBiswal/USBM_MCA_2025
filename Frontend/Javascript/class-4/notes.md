# for loop
# Syntax:
for(initialization;condition;increment or decrement)
{
//statement
}

# e.g:-Print the numbers between 1 to 5

for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

## 2. while Loop
The while loop continues to execute as long as the specified condition is true.
# Syntax
while (condition) {
    // Code to be executed
}
# Example :- 
let i = 0;
while (i < 5) {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
}
## 3. do...while Loop
The do...while loop is similar to the while loop, but it guarantees that the code block will execute at least once, as the condition is checked after the execution of the loop.
# Syntax
do {
    // Code to be executed
} while (condition);

# Example:-

let i = 0;
do {
    console.log(i); // 0, 1, 2, 3, 4
    i++;
} while (i < 5);

## 5. for...in Loop
The for...in loop is used to iterate over the enumerable properties of an object.
# Syntax 
for (const key in object) {
    // Code to be executed
}
# Example 

const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
    console.log(`${key}: ${obj[key]}`); // a: 1, b: 2, c: 3
}




