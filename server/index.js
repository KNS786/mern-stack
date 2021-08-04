var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var PORT=process.env.PORT || 5000;

require('dotenv').config();

//body 
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
var cors=require('cors');
app.use(cors());
//app.use(express.urlencoded({extended:true}))
app.use(express.json());

//user routing
var bmi=require('./router/calculator');
app.use('/',bmi);

//create connection in mongodb atlas
require('./models/connection')


//path module
const path=require('path');
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./client/build", "index.html"));
});


//user actions
app.use('/',function(req,res){
     res.send("App running");
     
})

if(process.env.NODE_ENV=='production'){

}


app.listen(PORT,function(){
    console.log("App running");

})