cross = true;
scont =0;
pikaudio=new Audio('pikaaaa.mp3');
gaudio=new Audio('big-impact-7054.mp3');
baudio=new Audio('bg.mp3');

document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        baudio.play();
        updateScore(scont);
        pikaudio.play();
        g=document.querySelector('.gameover');
        g.style.visibility='hidden';
        dino = document.querySelector('.pika');
        v=document.querySelector('.obstacle');
        //adding new class this class property is define after class added
        dino.classList.add('obt');
        v.classList.add('obani');
        //removing this class after 1second
        setTimeout(() => {
            dino.classList.remove('obt')
        }, 1000);
    }
}
setInterval(() => {
   
    
    p=document.querySelector('.pika');
    d=document.querySelector('.obstacle');

    // parseInt convert pixel into the number
    //taking postion of image from left and top of pika 
    px=parseInt(window.getComputedStyle(p,null).getPropertyValue('left')) ;//distance of pica from left
    py=parseInt(window.getComputedStyle(p,null).getPropertyValue('top')); 

    // taking postion of image from left and top of obstacle
    ox=parseInt(window.getComputedStyle(d,null).getPropertyValue('left')) ;
    oy=parseInt(window.getComputedStyle(d,null).getPropertyValue('top')); 

    //give us absolute value of dx and dy respective
    offsetX = Math.abs(px - ox);
    offsetY = Math.abs(py - oy);

    // console.log(offsetX,offsetY);
    if(offsetX < 73 && offsetY < 52)
    {
        // baudio.stop();
        baudio.pause();
        updateScore(scont-1);
        v.classList.remove('obani');
        g.style.visibility='visible';
        gaudio.play();
        scont=0;
        
    }
    // for updating score
    else if (offsetX < 145 && cross) {
        // console.log("I am called")
        scont += 1;
        updateScore(scont);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
    }

}, 10);

function updateScore(scorecount)
{
    
    socre=document.getElementById('score');
    score.innerHTML=`YOUR SCORE:${scorecount}`
}