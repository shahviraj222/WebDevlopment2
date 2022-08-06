const express=require('express');
const bp=require('body-parser');

const app= express();

app.use(bp.urlencoded({extended:false}));

app.use('/view',(req,res,next)=>{

    // res.write("<html><body>")
    // res.write("<h1>Hello Every One</h1>");
    res.send("<form action='product' method='POST'>Enter Your Name<input type='text' name='name'><button type='submit'>Add</button></form>")
    // res.write("</html></body>")
})


app.use('/product',(req,res,next)=>{

    // but here we can use the thing req.body[name] all that
    console.log(req.body)
    res.redirect('/');
})

app.use('/', (req, res, next) => {

    // here name is not working 
    console.log("Hello Your Name Is:",req.body,req.body['name']);
    res.send(`Hello from Express!`);
  });
app.listen(3000);