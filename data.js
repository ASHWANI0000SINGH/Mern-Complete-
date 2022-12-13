const fs=require('fs');
const { argv } = require('process');

// fs.writeFileSync("ash.text" ,"hi this is new file");

console.log(argv)

if(input[2]=="add"){
   fs.writeFileSync(argv[3],argv[4]);
}else{
    fs.unlinkSync(argv[3]);
}