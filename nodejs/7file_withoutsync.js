const {readFile , writeFile, read, write} =require('fs');

// in this write file if file is not present than we get an error
writeFile('./context/subfolder/test.txt',"Hello Viraj",(e)=>{
   if(e)
   {
    console.log("File must not present")
   }
})


// in this we have to give utf8 if not than we get a buffer
readFile('./context/subfolder/test.txt','utf8',(err,result)=>{
    if(err)
    {
        console.log(err);
        console.log("Your File Doesn't exists")
        return
    }
    console.log(result) //here the data of file is saved in results
}

)