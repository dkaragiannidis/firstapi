//import express
const express=require("express");

const app=express();
app.use((req,res,next)=>{
res.status(200).json({
    message:'yeah it works'
})
});
//pws to girname pisw
module.exports=app;