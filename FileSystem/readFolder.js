const fs = require('fs');
fs.readdir("myFolder", function(err, files){
    if(err) console.error(err);
    else console.log(files);
})


// used to read folder