const express=require('express');
const{addEnquiry}=require("../Controllers/enquiryController");
const router=express.Router();

//routes
router.post("/add",addEnquiry);



module.exports=router;