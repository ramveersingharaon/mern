import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/mern2").then(()=>{
    console.log("The connection is successfully")
}).catch((e)=>{
    console.log("The db connection is failed" + e)
})