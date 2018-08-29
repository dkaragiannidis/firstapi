const express=require("express");
//καθορισμος router
const router=express.Router();

router.get("/",(req,res,next)=>{
    res.status(200).json({message:"omg get orderssssss111111"
});
});
router.post("/",(req,res,next)=>{
    res.status(201).json({message:"omg POST orderssssss"
});
});
router.get("/",(req,res,next)=>{
    res.status(201).json({message:"omg get orderssssss"
});
});
router.get("/:orderid",(req,res,next)=>{
    res.status(200).json({
        message:"omg get details",
        orderid:req.param.orderid
});
});
router.delete("/:orderid",(req,res,next)=>{
    res.status(200).json({
        message:"omg ORDER DELETED",
        orderid:req.param.orderid
});
});
module.exports=router;