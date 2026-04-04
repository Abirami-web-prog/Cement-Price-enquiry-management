const moongoose=require("mongoose");
const enquirySchema=new moongoose.Schema({
    name:
    {String,

    },
    phone:
    {String,

    },
    cement:
    {String,

    },
    quantity:
    {Number,
        
    },
    message:{String,},
    createdAt:{
        type:Date,
        default:Date.now
    }
});

module.exports=moongoose.model("Enquiry",enquirySchema);