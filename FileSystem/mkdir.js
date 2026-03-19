const fs = require('fs');
fs.mkdir("myFolder",function(err){
    if(err) console.error(err);
    else console.log("Folder Created");
})