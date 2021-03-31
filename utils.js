/*generateToken –
In this function, we will return the auth token created using the 
“jsonwebtoken” package. For that, we need basic user details (like id, name, role, etc) 
and secret key (mentioned in .env file). Make sure don’t use password and other 
sensitive information in user details to create token.*/


//generate token using secret from process.env.JWT_SECRET
const jwt=require('jsonwebtoken');

function generateToken(user)
{
    if(!user) return null;

    //users basic details
    const u=
    {
        firstname : user.firstname,
        lastname :user.lastname,
        grade :user.grade,
        role:user.role,
        email:user.email
    };

    return jwt.sign(u,process.env.JWT_SECRET,{
        expiresIn:60*60*24,
    });
}

/*getCleanUser – 
In this function, we will return the basic user information 
which we can pass it to the user along with the token.*/


function getCleanUser(user)
{
    if(!user) return null;

    return
    {
        firstname : user.firstname;
        lastname: user.lastname;
        grade :user.grade;
        role:user.role;
        email:user.email
    };
}

module.exports={getCleanUser,getCleanUser}