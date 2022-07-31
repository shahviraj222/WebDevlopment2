//using file sync it goes line by line if we don't use than node is not going to wait to process close some time we get error

const fs = require('fs');
const file_content = fs.readFileSync('./context/subfolder/test.txt',).toString();
 console.log(file_content);    
const write="Hello Viraj";

fs.writeFileSy/nc('./context/subfolder/test.txt',write);
