const express = require('express');
const app = express();

const port = 3001;
const x = {
    message : 'hello world'
};
app.get('/',function(req,res){
    res.send("<h1> HELLO </h1");
})
app.get('/api/hello',function(req,res){
    const x = {
        message: "hello"+" "+req.query.name,
        age: req.query.age
    }
    res.send(x);
})
app.listen(port , function(err){
    if(err){
        console.log("ERRORR");
    }
    else{
        console.log("SUCCESS");
    }
}) 