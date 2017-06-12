var express = require("express");

var app = express();

app.get("/", function(req, res){
    res.send("Hello There!!")
});

app.get("/home", function(req, res){
    res.send("welcome to home page")
});




app.listen(process.env.PORT, process.env.IP, function(){
    console.log("server started.....")
})