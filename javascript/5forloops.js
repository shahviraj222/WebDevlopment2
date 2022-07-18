friends=["Vimal","Viraj","Bunty","Nemi","Siddhi","Dolly","Viral"];

// normal loop
for(let i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}

// ForEachloop
console.log("For Each Is Runing");

friends.forEach(element => {
    console.log(element);
});

friends.forEach(function add(ele){
    console.log(ele);
})

// Forin
console.log("For in loop is runing")
for (let i in friends){
    console.log(friends[i]);
} 

// forof
console.log("For of loops is runing");
for (let j of friends){
    console.log(j);
}