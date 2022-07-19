const { stringify } = require("querystring");
const { text } = require("stream/consumers");

// i have object that contains name of students and the id of the students i want to get only the name of student
const students={
    name:["viraj","vimal","siddhi","bunty","nemi"],
    id:[1,2,3,4,5]
};
// i want the name and like viraj 1 

// i am converting name to array from obj
let tex=JSON.stringify(students)
// console.log(tex)

const nameofstudent=(stds)=>{
    // result=stds.map() why this is not working
}
const double=(numbers)=>{
    return numbers.map((number)=>multiply(number))
}
const multiply=(n)=>{
    return n*2;
}
// console.log(name);
let name=nameofstudent(tex)
// double([4,54,545,45,454,5])