const express=require('express');
const app=express();
const path=require('path');
const connectDatabase=require('./config/connectionDatabase');
const dotenv=require('dotenv');
const cors=require('cors');
dotenv.config({path:path.join(__dirname,'config','config.env')})


app.use(cors({
        origin:"http://localhost:5173"
}));


const productRoutes=require('./routes/productRoutes');
const enquiryRoutes=require('./routes/enquiryRoutes');
connectDatabase();


app.use(express.json())
app.use('/api/products/',productRoutes);
app.use('/api/enquiry/',enquiryRoutes);



app.listen(process.env.PORT,()=>{
    console.log (`Server listening to the Port ${process.env.PORT} in ${process.env.NODE_ENV}`)
});
