const mongoose =require("mongoose");
require("dotenv").config();



const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true},
    email:{
        type:String,
        required:true,
        unique: true},
    age:{
        type:Number,
        required:true},
    
    regdno: {
         type: String,
          required: true
    },
    city:{
        type:String,
        required:true},
    blood:{
        type:String,
        required:true},
    contact:{
        type:Number,
        required:true},
},
{timestamps:true}

) ;
const userModel = mongoose.model("user",userSchema);

module.exports = userModel;