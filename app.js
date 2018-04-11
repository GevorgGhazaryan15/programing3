var express = require("express");
var app = express();

app.use(express.static("public"));

app.get("/", function(req, res){
   res.redirect("public");
});

app.listen(8888, function(){
   console.log("Example is running on port 8888");
});
