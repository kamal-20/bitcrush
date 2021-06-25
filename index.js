var express = require("express");
var app = express();

app.get("/", (rep,res)=>{
    res.send("Hello World!");
})

app.listen(process.env.PORT || 5000, function() {
    console.log("the server has started");
  });