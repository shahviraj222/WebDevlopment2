var audio=document.createElement('audio');
audio.setAttribute('src', 'sound.mp3');
audio.loop=true; 
allow="autoplay";
console.log("Hi i am runing")
audio.play();//due to behavior chrome auto play is off by browse
