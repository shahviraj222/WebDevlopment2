let obj1={
    greeting: "Good Morning",
    names: ["Harry", "Rohan", "SkillF", "DjKhiladi"],
    speak(){
        this.names.forEach((student)=>{
            console.log(this.greeting + " Kukdoo Koo " + student); //lexical this 
        });
    }
}
obj1.speak();
// https://www.youtube.com/watch?v=OkFPMOudomg&list=PLu0W_9lII9agiCUZYRsvtGTXdxkzPyItg&index=60&ab_channel=CodeWithHarry