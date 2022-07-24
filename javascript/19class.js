class car 
{
    constructor(name,color,maxspeed)
    {   
        this.name=name;
        this.color=color;
        this.maxspeed=maxspeed
    };
   
    p=()=>{
        console.log('Hello this is p methode',this.name);

    }
}

const mrcd=new car('mrcd','red',501)
console.log(mrcd) //class is converted into object
mrcd.p();

// one thing is that every array is store and have methode those are implemented by the computer is in form of class 
// we can add our type in the array using prototype

Array.prototype.mypush=function ()
{
    return this.length
}
Array.prototype.mylength=5;

const fruit=["banana","apple","orange"]
console.log(fruit.mypush())
console.log(fruit.mylength)