const express=require("express");
const app = express();
const morgan=require('morgan');
//ipmort product routes
const productRoutes=require('./route/product');
const ordersRoutes=require('./route/order');
app.use(morgan('dev'));
app.use("/order", ordersRoutes)
app.use("/product", productRoutes);
app.use((req,resizeBy,next)=>{
    const error=new Error("not found");
    error.status(404);
    next(error);
});
app.use((error,req,res,next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message: error.message
        }
    });
});
module.exports = app;