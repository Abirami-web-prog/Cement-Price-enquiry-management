const express=require('express');
const {addProduct,getProducts}=require("../Controllers/productController");
const router=express.Router();

//routes
router.post("/add",addProduct);
router.get("/",getProducts);

// router.route('/add').post(addProducts);
// router.route('/').get(getProducts);

module.exports=router;