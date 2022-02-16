let express = require('express');
const app = express();

app.get('/api', function(req, res){
    res.json({
        message : "hello world"
    })
})

app.listen(8080, function() {
    console.log('★start server port 8080★');
})