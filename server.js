//enabling middleware to handle requests

const express = require('express');
const app =express();
const port =process.env.port||4000;

//adding request handler
app.get('/',(req,res) =>{
    res.send("Welcome to our server");
});

//setting up server
app.listen(port,() =>
{
    console.log("server is running on "+ port);
});