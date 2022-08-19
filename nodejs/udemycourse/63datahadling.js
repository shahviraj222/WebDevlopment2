const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// if we write .use than no matter what's the url it continue the process (but if i write get than the correct match is going to found)

app.use(bodyParser.urlencoded({extended: false}));

app.use('/add-product', (req, res, next) => {
  res.send('<form action="product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
});

app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

app.get('/', (req, res, next) => {
  res.send('<h1>Hello from Express!</h1>');
});

// handling error 
app.use((req,res,next)=>{
  res.status(404).send('<h1>404 Not Found Hello</h1')
})
app.listen(3000);
