const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/') {
    res.write('<html>');
    res.write('<head><title>Enter Message</title><head>');
    // below line name is important beacause the key value pair is sent by the node
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {

    const body=[]; //empty array to store the databuffer

    //on is listnner used for event listnner all the request comes i chuncks from users so we have to collect when data chunnks sended
    req.on('data', chuck =>{
        body.push(chuck); 
    })
    
    req.on('end',()=>{
        // console.log(body.toString())
        const parsebody=body.toString()
        message=parsebody.split('=')[1] //split funciton return the array so we want second array
        console.log(message)
        fs.writeFileSync('./message.txt',message);
    })
    res.statusCode = 302;
    res.setHeader('Location', '/');
    return res.end();
  }

  res.setHeader('Content-Type', 'text/html');
  res.write('<html>');
  res.write('<head><title>My First Page</title><head>');
  res.write('<body><h1>Hello from my Node.js Server!</h1></body>');
  res.write('</html>');
  res.end();

});

server.listen(3000);
