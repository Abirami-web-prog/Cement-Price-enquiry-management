const mongoose=require("mongoose");
const  productSchema=new mongoose.Schema({
    brand:{
       type:String,
       required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String
    },
    image:{
        type:String,
        required:true
    }
});
module.exports=mongoose.model("Product",productSchema);