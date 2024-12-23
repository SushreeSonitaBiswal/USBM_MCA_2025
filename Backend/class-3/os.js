const os = require("os")
 

// // custom modules
console.log(os);
 console.log(os.homedir());//c:Users\sushr
 console.log(os.hostname());// LAPTOP-LSVLU3I5
 console.log(os.platform());//win32
 console.log(os.release());//10.0.22631
 console.log(os.userInfo());//[Object: null prototype] {
//     uid: -1,
//     gid: -1,
//     username: 'sushr',
//     homedir: 'C:\\Users\\sushr',
//     shell: null
//   }
 
console.log(os.userInfo().username);//sushr
console.log(os.totalmem());//8245334016
console.log(os.freemem());//1690673152





