var express=require('express');
var router=express.Router();

//height is cm
//weight kgs 
function Calculate(weight,height,req){
    height=height/100;
    var calculator=weight/height;
    var _category;
    //proving catgeory
     if(calculator < 19){
         _category="underweight";
     }else if(calculator > 18.5 && calculator < 26 ){
         _category="normal"
     }else if(calculator > 25 && calculator < 30){
         _category ="overweight"
     }else if(calculator < 30){ _category="obsese";}



    // calculating bmi
    // weight and height
    //BMI=weight(kg)/height(m^2)
    var new_Bmi=new bmi({
        height:height,
        weight:req.body.weight,
        bmi:calculator,
        category:_category
        
    })

    new_Bmi.save()
    .then(result=>console.log(result))
    .catch(err=>console.log(err));

    return;
}

//storing db in post data
var bmi=require('../models/bmi');

router.post('/bmi',async function(req,res){
    var {height,weight}=req.body;
    await Calculate(weight,height,req);
 
    await res.status(200).json({usr:req.body})

})

router.get('/bmi',function(req,res){
    bmi.find({}).then((resultData)=>{
        res.status(200).json({result : resultData})
    })
    .catch(err=>console.log(err));

})

module.exports=router;