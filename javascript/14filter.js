// filter loops and return a arrau we want according to condition


array=[4,11,14,5,20,5,8]
x=5

a=array.filter((i)=>{
    if(i>x)
    {
        return i
    }
})
console.log(a);

console.log("Second Methode to Do IS");
// like the thing we have in c also for if else 
b=array.filter(j => j>x)
console.log(b);