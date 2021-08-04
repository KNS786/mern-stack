// username : navani password:w2ohpeXGQRarflAg

var mongoose=require('mongoose');
var URI=`mongodb+srv://navani:w2ohpeXGQRarflAg@cluster0.fcsv4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`

mongoose.connect(URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})
.then(()=>console.log("db connected"))
.catch(err=>console.log(err))
