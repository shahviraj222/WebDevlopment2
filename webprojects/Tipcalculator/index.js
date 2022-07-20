// variables
let noofpeople = 1
let printnopeople = document.getElementById("nopeople");
let totalbillprint = document.getElementById("totalbill");
totalbillprint.textContent = 00;
// to get new photo run only in dom not in terminal
const getnewdog=()=>{
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        // .then(json => console.log(json))
        .then(json => {
            img = document.getElementById('photo')
            //inside the tile whatever you want to give as it is
            img.innerHTML = `<img src='${json.message}'height="200vh" width="200vw"/>`
            console.log(img.innerHTML)
        }
        )
    }
getnewdog();
// priting no of people
printnopeople.textContent = noofpeople;

// To calculatebill
const calculatebill = () => {

    // getting value
    const billamount = document.getElementById("billamount").value;
    let tipamount = document.getElementById("tipamount").value;
    tipamount = tipamount.slice(1, tipamount.length); //removing %

    console.log(billamount)
    console.log(tipamount)
    console.log(noofpeople)
    //evaluating the total amount
    let btext = (parseInt(billamount) + parseInt(tipamount) * parseInt(billamount) / 100) * noofpeople;
    totalbillprint.textContent = btext;
}

//Onclick Functions

const increase = () => {
    noofpeople += 1
    printnopeople.textContent = noofpeople;
    calculatebill();
    console.log("I am Clicked")
}
const decrease = () => {
    noofpeople -= 1
    printnopeople.textContent = noofpeople;
    console.log("I am Clicked")
    calculatebill();
}

