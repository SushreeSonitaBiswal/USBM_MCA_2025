//Nested object
let Student = {
 name:"Sushree",
 age: 21,
 batch: "MCA",
 roll : 145,
         address:{
              city:"BBSR",
               pin:751024,
               po: "rcl",
 }
 
};
//Social media backend comments
let user ={
    user_name :"xyz",
    email_id :"abc@gmail.com",
    gender : "Male",
    comments :["abc","def","ghi"],
    address : {city: "bbsr",
               pin:751024,
             state:"Odisha",
    }

}
//Accessvalues 
//Username
//Email
//City and state
//Comments
//First and last  comments
user.name ="xyz";
 console.log(user.name);//xyz
 console.log(user.email_id);//abc@gmail.com
 console.log(user.comments);//['abc','def','ghi']
 console.log(user.comments[0]);//abc
 console.log(user.comments[2]);//ghi
 console.log(user.address.city);//bbsr