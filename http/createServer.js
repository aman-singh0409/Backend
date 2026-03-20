const http=require('http');
const server= http.createServer(function(req, res){
    res.end("Hey server!");
})
server.listen(3000);