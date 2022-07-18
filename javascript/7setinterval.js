
let i=1
var timeout
let clicked=()=>{
    timeout=setInterval(() => {
        console.log("After Every 5 Second I am runing")
    }, 5000);
}

clicked()
if(i==0)
{
    clearInterval(timeout);
}


// use of setinterval

let time=new Date();
setInterval(()=>{
    console.log(time)
},1000)