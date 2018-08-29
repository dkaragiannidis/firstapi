const express=require("express");
//καθορισμος router
const router=express.Router();
//get mthod to go /app/product
//get("url", handler (req,res,next) )
router.get("/",(req,res,next)=>{
    res.status(200).json({
        message:'handling get yeahhh'
    })
});
router.post("/",(req,res,next)=>{
    res.status(200).json({
        message:'handling post yeahhh'
    })
});
//route individual products return special or else pass the id back
router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;
    if (id === 'special') {
        res.status(200).json({
            message: 'You discovered the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You passed an ID'
        });
    }
});
//update products
router.patch('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Updated product!'
    });
});
//delete a product
router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product!'
    });
});

module.exports=router;