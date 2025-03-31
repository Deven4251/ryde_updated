const mongoose=require('mongoose');
const cartmodel=mongoose.model("cart",new mongoose.Schema({
    email:{type:String,required:true},
    carname:{type:String,required:true},
    rentprice:{type:String,required:true},
    pid:{type:String,required:true},
    carimage:{type:String,required:true},
    carnumber:{type:String,required:true},
    ownername:{type:String,required:true},
	qty:{type:String,required:true}
}));
module.exports=cartmodel