const mongoose=require('mongoose');
const adminmodel=mongoose.model("login",new mongoose.Schema({
    username:{type:String,required:true},
    password:{type:String,required:true}
}));
module.exports=adminmodel;