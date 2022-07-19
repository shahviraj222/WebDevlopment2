let x;
let i=0
let pname=window.prompt("Enter Your Name:")
let na=document.getElementById("name");
na.innerHTML=na.innerHTML+pname;
let rank=0

let con=document.getElementById("result");

const computerdim=(event)=>
{
    
    let vs=document.createElement('img');
    vs.src="vs.png";
    let tx=document.createElement('h1');    


   let userchoise=document.createElement('img');
    let computerchoise=document.createElement('img');
    userchoise.src=`${event.path[1].id}.png`;
    con.appendChild(userchoise);

    console.log(event.path[1].id) // we get the id of the particular computerchoise
    r=Math.floor(Math.random()*3); //0 to 2 number is genrated

    let sty=document.getElementById(event.path[1].id);
    sty.style="opacity:0.5";
    
    

    setTimeout(
        ()=>{sty.style="opacity:1" },2000);

    switch (r)
    {
        case 0:
            x=rock;
            computerchoise.src="rock.png"
    
            break;    
        case 1:
            x=papper;
            computerchoise.src="papper.png"
            
            break;
        case 2:
            x=scissors;
            computerchoise.src="scissors.png"
            
            break;

    }
    if(event.path[1].id == x)
    {
        
        let textarea=document.createTextNode("\nMatch Draw");
        tx.appendChild(textarea)
        rank=rank;
        
    }
    else
    {
        let textarea=document.createTextNode("\nYou Win");
        tx.appendChild(textarea);
        rank=rank+1;

    }
    
    a=document.getElementById("score");
    a.innerHTML=rank

   
    setTimeout(() => {
        con.appendChild(vs);
        con.appendChild(computerchoise);
        con.appendChild(tx);
        console.log(tx);
        
    }, 1000);
    


}
