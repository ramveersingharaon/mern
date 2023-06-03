import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true, "Name is Required Field"]
    },
    email:{
        type:String,
        required:[true, "Email is Required Field"],
        unique:[true,"This is Email is already exitest"]
    },
    password:{
        type:String,
        required:[true, "Password is Required Field"],
    }
})

export const User = mongoose.model("User",userSchema);