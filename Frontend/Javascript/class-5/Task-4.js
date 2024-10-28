// Exercise 4: Login Attempt Limit
// Allow the user 3 login attempts. If they fail 3 times, show a lockout message.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let password = "sushree@2003";
let i = 1;

while (i <= 3) {
    let attemptsLeft = 4 - i; // Calculate attempts left
    rl.question(`Enter your password \nYou have only ${attemptsLeft} attempt(s): `, (Attempt) => {
        if (password === Attempt) {
            console.log("Login Successfully");
            rl.close();
        } else {
            console.log("Wrong password");
            console.log(`You have ${3 - i} attempt(s) left.`);
            i++;

            if (i > 3) {
                console.log("Too many failed attempts. You are locked out.");
                rl.close();
            } else {
                // Continue the loop by asking for the next attempt
                while (i <= 3) {
                    rl.question(`Enter your password \nYou have only ${4 - i} attempt(s): `, (Attempt) => {
                        if (password === Attempt) {
                            console.log("Login Successfully");
                            rl.close();
                        } else {
                            console.log("Wrong password");
                            console.log(`You have ${3 - i} attempt(s) left.`);
                            i++;

                            if (i > 3) {
                                console.log("Too many failed attempts. You are locked out.");
                                rl.close();
                            }
                        }
                    });
                }
            }
        }
    });
}
