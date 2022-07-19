// why we call reduce because we are reducing number's of array into single one
const sum=(nums)=>{

    // here reduce function is taking the two parameter prev show the past wala number and curr show present number 
    // and return means addtion of both number is stored in previous number

    return (nums.reduce(function(prev,curr){
        console.log(prev,curr)
        return prev+curr
    }))
}
console.log(sum([5,45,10]))

// second way
numbers=[11,2,5]
const sum2=(a,b)=>{
    return a+b
}
console.log(numbers.reduce(sum2))

