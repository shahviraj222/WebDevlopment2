const express=require('express');
const path=require('path');
const router =express.Router();

console.log(__dirname)
// here we are response to incoming request if match with path
router.get('/',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','views','shop.html'));
})

module.exports=router;