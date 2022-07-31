const { readFile } = require("fs")

const gettext=(path)=>{
    
    return (new Promise((reject,responce)=>{
        
        readFile(path,'utf-8',(e,d)=>{
            if(e)
            {
                reject(e)
            }
            else{
            
              responce(d);
            }
        })   
    })
    )

}

const start = async ()=>{
    
    try{
        
        const path='context/subfolder/test.txt'
        const first= await gettext(path);
        console.log(first);
    }
    catch(e)
    {
        console.log(e);
    }
}

console.log("Task One")
start();
console.log("Task Two")