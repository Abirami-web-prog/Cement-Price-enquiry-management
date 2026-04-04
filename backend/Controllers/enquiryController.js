const Enquiry=require("../models/Enquiry");
const addEnquiry=async(req,res)=>{
    try{
        const enquiry=new Enquiry(req.body);
        await enquiry.save();
        res.json({
            message:"Enquiry saved successfully"
        });
    }
     catch(error){
              res.status(500).json({
                error:error.message
              });
        }
};
module.exports={addEnquiry};