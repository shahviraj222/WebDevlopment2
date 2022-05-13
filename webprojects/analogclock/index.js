
    var p=0;
    var f=0;

setInterval(() => {
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
   
    // this i get after every second my hand move this much 
    // but tis not give the actual time start from (12) and one problem is when one rotation is completed of second hand after that s=0 then all progress of my hand are loss and hands come into original states
    // hrotation = 0.0084*stime;
    // mrotation = 0.1*stime;
    // srotation = 6*stime;


    // modification in my logic
    
    hrotation = 0.0084+p;
    mrotation = 0.1+f;
    p=hrotation;
    f=mrotation;
    srotation = 6*stime;

    // to start with current time
    // hrotation = 30*htime + mtime/2;
    // mrotation = 6*mtime;
    // srotation = 6*stime;

    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000);