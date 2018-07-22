var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(__dirname))
// viewed at http://localhost:8080
app.get('/', function(req, res) {
    console.log("Server started in PORT | 8080")
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen( process.env.PORT ||8080);