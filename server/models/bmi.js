var mongoose=require('mongoose');

var bmi=mongoose.Schema({
    height:Number,
    weight:Number,
    bmi:Number,
    category:String,
    date:Date
})

module.exports=mongoose.model("bmi",bmi);
