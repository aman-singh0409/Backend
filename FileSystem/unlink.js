const fs = require('fs');
fs.unlink("hello.txt",function(err){
    if(err) console.error(err);
    else console.log("Removed");
})