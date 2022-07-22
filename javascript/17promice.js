//in the case of api this promise work's like this we write some code and if we get true than promise return some thing else reject return 

const promise1= new Promise((resolve,reject)=>{

    setTimeout(() => {
        checker=false
        // like ternary operator
        checker ? resolve('ready'):reject('not ready')
    }, 5000);
})

console.log(promise1)


// if we want to print solution what ever time is taken by the api than we have to use .then
promise1
// if after resolve do this 
.then(value =>{
    console.log(value)
    console.log({value})//creating object and value of that is written inside the 'value'
})
// if after rejected than do this
.catch(value =>{
    console.log(value)
    console.log('**',{value}) //creating object and value of that is written inside the 'value'
})
// one thing if we want solution within the some amount of time

setTimeout(() => {
    
    console.log("Methode2")
    console.log(promise1)
},6000);