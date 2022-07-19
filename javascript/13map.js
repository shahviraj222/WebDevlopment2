// map loops and return a arrau we can do anything with the help of methode we can describe inside the function

// example 1
const half=(nums)=>{

    //this return is for the half function  
    return nums.map((num)=>{

        //this return is for map function
        return num=num/2
    })
}

console.log(half([5,5,2,8]))

// example 2
const double=(numbers)=>{
    return numbers.map((number)=>multiply(number))
}
const multiply=(n)=>{
    return n*2;
}
console.log(double([11,55,15]))


// simply if we breake the map function the we get like 
// .map(()=> function defination)