//enabling middleware to handle requests

require('dotenv').config();

const express = require('express');
const cors = require('cors');
const bodyparser=require('body-parser');
const jwt = require('jsonwebtoken');
const { urlencoded } = require('body-parser');

const app =express();
const port =process.env.port||4000;

//statis user details
const userData=
{
    firstname : "sam",
    lastname :"anderson",
    grade :'12',
    role:"student",
    email:"samanderson@gmail.com"
}

//enable cors
app.use(cors());

//parse application/json
app.use(bodyparser.json());

app.use(bodyparser,urlencoded({extended:true}));


//adding request handler
app.get('/',(req,res) =>{
    res.send("Welcome to our server");
});

// validate the user credentials
app.post('/signin', function (req, res) {
  const user = req.body.email;
  const pwd = req.body.password;


// return 400 status if username/password is not exist
if (!user || !pwd) {
    return res.status(400).json({
      error: true,
      message: "Username or Password is required."
    });
  }
 
 // return 401 status if the credential is not match.
 if (user !== userData.email|| pwd !== userData.password) {
    return res.status(401).json({
      error: true,
      message: "Username or Password is incorrect."
    });
  }

  // generate token
  const token = utils.generateToken(userData);
  // get basic user details
  const userObj = utils.getCleanUser(userData);
  // return the token along with user details
  return res.json({ user: userObj, token });
});

//setting up server
app.listen(port,() =>
{
    console.log("server is running on "+ port);
});