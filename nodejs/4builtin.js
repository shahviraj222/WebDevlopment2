const os = require('os');
// console.log(os)
console.log(os.userInfo()); 

const user={
    name:os.userInfo().username,
    dir:os.userInfo().homedir,
    uptime:os.userInfo().uptime,
    mem:os.totalmem()
}

const operating={
    name:os.type(),
    relase:os.release()
}
console.log(user);
console.log(operating)