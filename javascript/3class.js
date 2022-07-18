class emplyoee
{
    person={
        name:"none",
        salary:0
    }
    
    constructor(name,salary){
     
        this.person.name=name;
        this.person.salary=salary;

    };

}

e=new emplyoee("none",0)
console.log(e.person.name);

// console.log(e.name , e.age);