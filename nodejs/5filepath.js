const path=require('path');

filepath=path.join('/context///','subfolder','text.txt') //if we add extra '/' than also it exclude and give correct path
console.log(filepath)

const base = path.basename(filepath); //give the basefile-name
console.log(base) 

// absolute path using global variable
const absolute=path.resolve(__dirname,'context','subfolder','text.text');
console.log(absolute);

