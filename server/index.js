var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var cookieParser=require('cookie-parser');
var PORT=process.env.PORT || 7000 ;
var path=require('path');
var cors=require('cors');
require('dotenv').config();

var config=require('./config/key');
app.use(cors());

//create connection in mongodb atlas
require('./models/connection')


//body 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cookieParser())


//user routing
var bmi=require('./router/calculator');
app.use('/',bmi);








//user actions
app.use('/',function(req,res){
     res.send("App running");
     
})


if(process.env.NODE_ENV=='production'){
    app.use(express.static("client/build"))
    app.get("*", function (request, response) {
      response.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
    });
}


app.listen(PORT,function(){
    console.log("App running");

})