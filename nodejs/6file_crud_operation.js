const fs = require('fs');
const file_content = fs.readFileSync('./context/subfolder/test.txt',).toString();
 console.log(file_content);   