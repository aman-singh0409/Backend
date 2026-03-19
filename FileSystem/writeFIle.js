const fs = require('fs');
// WriteFile
fs.writeFile("hey.txt","Hey ! just started learning backend",(err) => {
        if (err) console.error(err);
        else console.log("Done");
})