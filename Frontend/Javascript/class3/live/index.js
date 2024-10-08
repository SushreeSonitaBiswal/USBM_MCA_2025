// Task home
// switch("0"){
//     case "0":
//         console.log("It is Monday")
//         break;
// }
//         switch("1"){
//     case "1":
//         console.log("It is Sunday");
//         break;
//         }
//         switch("2"){
//         case "2":
//         console.log("It is Tuesday");
//         break;
//         }
//         switch("3"){
//         case "3":
//         console.log("It is Wednesday");
//         break;
//         }
//         switch("4"){
//         case "4":
//         console.log("It is Thursday");
//         break;
//         }
//         switch("5"){
//         case "5":
//         console.log("It is Friday");
//         break;
//     }
//         switch("6"){
//         case "6":
//         console.log("It is Saturday");
//         break;
//         Default:
//         console.log("It is not a day")
// }


// Task 2
// switch("0,1,2,3,4,5,6"){
//     case "0":
//         console.log("It is Monday")
//         break;
        
//     case "1":
//         console.log("It is Sunday");
//         break;
       
//         case "2":
//         console.log("It is Tuesday");
//         break;
      
//         case "3":
//         console.log("It is Wednesday");
//         break;
         
//         case "4":
//         console.log("It is Thursday");
//         break;
      
//         case "5":
//         console.log("It is Friday");
//         break;
   
//         case "6":
//         console.log("It is Saturday");
//         break;
//         Default:
//         console.log("It is not a day")
// }
// OR

switch (new Date) {
    case 0:
      day = "Sunday";
      break;
    case 1:
      day = "Monday";
      break;
    case 2:
       day = "Tuesday";
      break;
    case 3:
      day = "Wednesday";
      break;
    case 4:
      day = "Thursday";
      break;
    case 5:
      day = "Friday";
      break;
    case 6:
      day = "Saturday";
  }

//   Task 2
    // Take user input for the month number
let month = parseInt("Enter a month number (1-12):");

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month number. Please enter a number between 1 and 12.");
}
// task 2
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Enter a month number (1-12): ', (answer) => {
    const month = parseInt(answer);
    let monthName;

    switch (month) {
        case 1:
            monthName = "January";
            break;
        case 2:
            monthName = "February";
            break;
        case 3:
            monthName = "March";
            break;
        case 4:
            monthName = "April";
            break;
        case 5:
            monthName = "May";
            break;
        case 6:
            monthName = "June";
            break;
        case 7:
            monthName = "July";
            break;
        case 8:
            monthName = "August";
            break;
        case 9:
            monthName = "September";
            break;
        case 10:
            monthName = "October";
            break;
        case 11:
            monthName = "November";
            break;
        case 12:
            monthName = "December";
            break;
        default:
            monthName = "Invalid month number. Please enter a number between 1 and 12.";
    }

    console.log(monthName);

});


        
    
    


