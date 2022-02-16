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
        ostype : "mobile"
    };
    const token = jwt.sign({userInfo}, secretKey)
    res.json({
        jsonwebtoken : token,
        mailSubscribe : true,
        permission : "admin"
    });
});

app.get('/api/protected', ensureToken, function(req, res){
    res.json({
        message : "this is protected"
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
        res.sendStatus(403);
    }
}

app.listen(8080, function() {
    console.log('★start server port 8080★');
})