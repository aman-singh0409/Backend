const fs = require('fs');
fs.rmdir("./copy1",function(err){
    if(err) console.error(err);
    else console.log("Removed");
})
// it is used to removed directory
// it is used to remove only empty directory
// if want to remove directory with content then we use {recursive: true} after the directory path
