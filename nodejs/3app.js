const names=require('./1modules');
const func=require('./2modules');
console.log(names);
console.log(func);

func.greet(names.a);
func.greet(names.b);
