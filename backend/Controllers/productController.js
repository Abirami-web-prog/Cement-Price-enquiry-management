const Product=require("../models/Product");
//Add a new product
const addProduct=async(req,res)=>{
   try{
    const productData=req.body;
    const newProduct=new Product(productData);
     await newProduct.save();
   
   
     res.json({
             message:"Product added successfully"
     });
   }
   catch(error){
    res.status(500).json({
        error:error.message
    });
   }
};

//Get all products
const getProducts=async(req,res)=>{
    try{

        const products=await Product.find();
        res.json(products);
    }
    catch(error){
        res.status(500).json({
            error:error.message
        });
    }
};

module.exports={addProduct,getProducts};