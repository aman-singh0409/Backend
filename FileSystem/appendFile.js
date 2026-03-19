const fs = require('fs');
// AppendFile
fs.appendFile("hey.txt"," Completed with writeFile and heading down to learn other things", function(err){
    if(err) console.error(err);
    else console.log("Done");
}) 
