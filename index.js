let express = require('express');
const app = express();
let jwt = require('jsonwebtoken');
const secretKey = "my_secret_key";

app.get('/api', function(req, res){
    res.json({
        message : "hello"
    });
});

app.get('/api/login', function(req, res){
    //auth user
    const userInfo = { 
        email : "test@gmail.com",
        ostype : "mobile",
        snsAgree : true,
        auth : "admin"
    };
    const expire = {
        expiresIn: 60
    };

    const token = jwt.sign(
        {userInfo}, 
        secretKey,
        expire
    )
    res.json({
        jsonwebtoken : token       
    });
});

app.get('/api/protected', ensureToken, function(req, res){

    jwt.verify(req.token, secretKey, function(err, decoded){
        if(err) {
            let outputMsg = "";
            switch (err.message) {
                case "invalid signature":                    
                    outputMsg = "invalid signature";
                    break;
                case "secret key check":                    
                    outputMsg = "secret key check";
                    break;
                default:
                    outputMsg = err.message;
                    break;
            }

            res.json({
                message : outputMsg
            });
        }else {            
            console.log(decoded);
            res.json({
                message : decoded
            });
        }
    });
   
});

function ensureToken(req, res, next) {
    const bearerHeader = req.headers["authorization"];
    if(typeof bearerHeader !== 'undefined'){
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;
        next();
    }else {
        // res.sendStatus(403);
        res.json({
            message : "authorization error"
        });
    }
}

app.listen(8080, function() {
    console.log('★start server port 8080★');
})