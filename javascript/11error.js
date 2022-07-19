try {
    hello();
}

catch(error)
{
    console.log(error.message);
}

// if we want to custome our error
try {
         hello();
        throw "Not Definie By Viraj";
    
}

catch(errr)
{
    console.log(errr.message);
}
