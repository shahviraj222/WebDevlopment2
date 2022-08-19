const express=require('express');
const bodyParser=require('body-parser');
const adminRoutes=require('./routers/admin');
const shopRouter=require('./routers/shop');
const path =require('path');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));

// here we are going to add path and use filtring 

// order of runing the middle-wear is top-to-bottom
// if our path match in first use than second one is not called 

// filtering here 
app.use('/admin',adminRoutes);
app.use(shopRouter);

app.use((req,res,next)=>{
    res.status(404);
    res.sendFile(path.join(__dirname,'views','page_error.html'))
})
app.listen(3000);