// Q1we have given a array we have to sequare that number than how we do this thing

const { count } = require("console")

    // solution 1
    number=[1,2,3,4,5,6]

    for (let i in number){
      number[i]=number[i]*2
    }
    console.log(number)

    // solution 2 using forof
    array=[2,4,5,8,10]
    result=[]
    for (let element of array) {
        console.log(element=element*2)
    }
    console.log("Dosn't change any thing:",array)
    for (let element of array)
    {
        result.push(element*2)
    }
    console.log("Result Of Doublying Array Is ",result)

//Q2Latter Counter
    CharecterCount =(a) => {
     let counter=0
    
     for (let i in a)
     {
         counter++;
     }
     return counter
    }
    console.log("Total length of text is ",CharecterCount("Viraj"))

//Q3we have to count the number of latter occure for how many times
    // only taking small letter in considration
    const Countchar =(word)=>
    {
        let j=0
        obj={}
        for (let i of word)
        {
           if(word.charCodeAt(j)>123 && word.charCodeAt(j)<97)
           {
                j++;
                continue;
           } 
           else
           {
                if(i in obj)
                {
                    // this part have some problems
                    
                    obj[i]+=1
                
                }
                obj[i]=1;
           }
           
           j++;
        }
        console.log(obj);
    }
    Countchar("viiiraj")
    
//Q4 count the frequency of word

// we are going to use split methode for the making word array
const wordcount=(sentance)=>{
    frequency={}
    let word=sentance.split(" ");
    console.log(word);
    word.forEach(element => {
        if(element in frequency)  
        {
            frequency[element]+=1;
        }
        else
        {
            frequency[element]=1;
        }
    });
    console.log(frequency)
}

wordcount("I am am am VIRAJSHAH")