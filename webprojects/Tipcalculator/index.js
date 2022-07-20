// variables
let noofpeople=1
let printnopeople=document.getElementById("nopeople");
let totalbillprint=document.getElementById("totalbill");
// priting no of people
printnopeople.textContent=noofpeople;

// To calculatebill
const calculatebill=()=>{

    // getting value
    const billamount=document.getElementById("billamount").value;
    let tipamount=document.getElementById("tipamount").value;
    tipamount=tipamount.slice(1,tipamount.length); //removing %
   
    console.log(billamount)
    console.log(tipamount)
    console.log(noofpeople)
    //evaluating the total amount
    let btext=(parseInt(billamount)+parseInt(tipamount)*parseInt(billamount)/100)*noofpeople;
    totalbillprint.textContent=btext;
}

//Onclick Functions

const increase=()=>{
    noofpeople+=1
    printnopeople.textContent=noofpeople;
    calculatebill();
    console.log("I am Clicked")
}
const decrease=()=>{
    noofpeople-=1
    printnopeople.textContent=noofpeople;
    console.log("I am Clicked")
    calculatebill();
}