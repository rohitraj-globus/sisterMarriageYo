var express= require('express');
var app=express();
app.use(express.static(__dirname + '/public'));

app.get("/",function(req,res){
	res.sendFile(__dirname+"/public/index.html");
});

var port = process.env.PORT || 8080;
app.listen(port, function(){
  console.log("HTTP server is up & Running on port " + port);
});
