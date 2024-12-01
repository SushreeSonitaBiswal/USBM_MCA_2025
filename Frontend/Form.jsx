/* eslint-disable no-unused-vars */
import React from 'react'
import { useState } from 'react';


const Form = () => {
const userArr = JSON.parse(localStorage.getItem('users')) || [];

    const [userName,setUsername]= useState("");
    const [userEmail,setUseremail]= useState("");
    const [userPassword,setUserPassword]= useState("")
    const handleChange=(event) =>{
        setUsername(event.target.value)
       // alert(`Your name is :${username}`);
    };

    const handleEmail = (event) => {
      setUseremail(event.target.value)
    }
    const handleSubmit = (event)=> {
    let userObj = {
      name:userName,
     email:userEmail,
     password:userPassword,
    }
    
userArr.push(userObj);
localStorage.setItem('users',JSON.stringify(userArr));
alert("Registration successfull");
setUsername("");
setUseremail("");
setUserPassword("");
   };


    console.log(userName);
    console.log(userEmail);


  return (
    <div>
     <div className ="flex-justify-ceter">
      <input 
      type="text"
       placeholder="Username"
         required
         value={userName}
         onChange ={handleChange}
         className="bg-slate-500 text-white"
         />
         <input type="email" 
         placeholder = "Enter your Email"
         name="userEmail"
          id="userEmail"
          required
         value={userEmail}
         onChange ={handleEmail}
         className="bg-slate-500 text-white" />
         <input type="password" 
         placeholder='Enter ypor password'
         name="UserPassword" 
         id="UserPassword" 
         required
         value={userPassword}
         onChange ={handleChange}
         className="bg-slate-500 text-white"
         />
         <button onClick ={handleSubmit} className="bg-red-500 text-white"/>

     </div>
    </div>
  );
};

export default Form;