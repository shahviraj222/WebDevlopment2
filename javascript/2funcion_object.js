const init = (name , age)=>{
const person={
    name:"name",
    age:0,
    add:"NA",
    money:0
};


person.name=name;
person.age=age 


console.log(person.name)
}
// outside the function
init("viraj", 41)

// setter
const person = {
    firstName: "John",
    lastName: "Doe",
    language: "",
    set lang(lang) {
      this.language = lang;
    }
  };

//   getter or function
const person2 = {
    firstName: "John",
    lastName: "Doe",
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

person2.assign("age",20)  
// console.log(person2.fullName()) 
console.log(person2)



