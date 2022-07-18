//json is used to convert javascript object to the string so using json we can do this
 let jsonobj={
    name:"Viraj",
    age:20,
    salary:700000
 };
 let string= JSON.stringify(jsonobj);
 console.log(string)
 console.log(typeof(string))
string=string.replace(/viraj/i,"Vimal");

let newobj=JSON.parse(string);
console.log(newobj)

