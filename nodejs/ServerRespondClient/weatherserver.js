const fs = require('fs');
const http = require('http');
const url =require('url');

http.createServer((req,res)=>
{
    filename=url.parse(req.url).pathname;
    console.log(filename);
    fs.readFile('./ServerRespondClient/Weather/index.html',(e,d)=>{
         if(e)
         {
            res.writeHead(404, {'Content-Type': 'text/html'});
            res.write("Hello");
            res.end("404 Not Found");
            res.end();
            return
         }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("Hello");
        res.end(`${d.toString()}`);
    })
    
}
).listen(3000);