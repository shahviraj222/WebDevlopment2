setTimeout(() => {
    console.log("Hello")
}, 2000);

let greet=(name)=>{
    console.log("Hello Good, ",name,"Morning");
}

//return a unique id we can use it after some other work
timeout=setTimeout(greet,5000,"Viraj");
// console.log(timeout);  
// clearTimeout(timeout);

// setTimeout(greet(),5000); you only have to write the name of the function not parenthesis

