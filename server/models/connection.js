// username : navani password:w2ohpeXGQRarflAg

var mongoose=require('mongoose');
var URI=process.env.MONGOURI;

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("db connected"))
.catch(err=>console.log(err))
