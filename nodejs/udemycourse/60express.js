const http=require('http');
const express=require('express');

const app=express();

app.use('/viraj',(req,res,next)=>{
    res.write("<h1>hello world to express js</h1>")    
    // next()
})

app.use('/',(req,res,next)=>{
   res.write("<h1>Default Message</h1>")
   
})
const server=http.createServer(app);
server.listen(3000)
