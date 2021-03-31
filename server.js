//enabling middleware to handle requests

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const { urlencoded } = require('body-parser');

const app =express();
const port =process.env.port||4000;

//enable cors
app.use(cors());

//parse application/json
app.use(bodyparser.json());

app.use(bodyparser,urlencoded({extended:true}));


//adding request handler
app.get('/',(req,res) =>{
    res.send("Welcome to our server");
});

//setting up server
app.listen(port,() =>
{
    console.log("server is running on "+ port);
});