const fs = require('fs');
fs.copyFile("hello.txt","./copy.txt",function(err){
    if(err) console.error(err);
    else console.log("Done");
})