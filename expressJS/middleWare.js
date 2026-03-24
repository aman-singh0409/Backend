const express = require('express');

const app = express();

app.use(function(req,res,next){
    console.log('Middleware run');
    next();
});

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get("/about",function(req,res){
  res.send("This is an about page");
});

app.get("/profile",function(req,res,next){
  return next(new Error("Something wnet wrong"))
});

app.use((err, req, res, next)=>{
  console.error(err.stack)
  res.status(500).send('Something borke!')
})

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})