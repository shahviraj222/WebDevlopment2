const http=require('http');

// create server is the callback methode it is used for the creating servers 
// req = parameter contains all info about the incoming request
// res = parameter contains all info about the response
const server=http.createServer((req,res)=>{
    if(req.url==='/')
    {
        res.end("Welcome to Home Page");
    }
    if(req.url==='/about')
    {
        res.end("Welcome to About Page");
    }
    if(req.url==='/contactus')
    {
        res.end("Welcome to ContactUS Page");
    }
})
server.listen(5000)