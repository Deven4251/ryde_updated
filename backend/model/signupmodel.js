const mongoose=require('mongoose');
const signupmodel=mongoose.model("singupmodel",new mongoose.Schema({ 
    name:{type:String,required:true},
	phonenumber:{type:String,required:true},
	email:{type:String,required:true},
	psw:{type:String,required:true}
}));
module.exports=signupmodel;