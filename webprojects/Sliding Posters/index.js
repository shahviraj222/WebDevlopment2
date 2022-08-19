let i=1
function next_temp()
{
    i++
    let t=i;
    // maximum tamplate that we have
    if(i>4)
    {
        i=1
        t=5
    }
    t=t-1;
    // getting element by id 
    p=document.getElementById(`t${t}`);
    n=document.getElementById(`t${i}`);
    p.style.display = 'none'; 
    n.style.display = 'block';
    console.log("next is clicked",i,t)
}
function pre_temp()
{
    
    if(i==1)
    {
       t=1
    }
    else{ 
        t=i-1
    }
       
   

    // getting element by id 
    p=document.getElementById(`t${i}`);
    n=document.getElementById(`t${t}`);
    p.style.display = 'none'; 
    n.style.display = 'block';
    console.log("next is clicked",i,t)
    if(i!=1)
    {
        i=i--
    }
}