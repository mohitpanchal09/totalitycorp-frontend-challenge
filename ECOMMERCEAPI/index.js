const express =require('express');
const mongoose = require('mongoose');
const dotenv = require("dotenv");

const app =express();
const userRoute = require('./routes/user');
const authRoute=require('./routes/auth')
const productRoute=require('./routes/product')
const cartRoute=require('./routes/cart')
const orderRoute=require('./routes/order')
const paymentRoutes = require('./routes/stripe')
const cors = require('cors');

dotenv.config();
mongoose.connect(process.env.MONGO_URL).then(()=>{
    console.log('db connected')
}).catch((err)=>{
    console.log(err)
})

app.use(cors());
app.use(express.json());

app.use('/api/auth',authRoute);
app.use('/api/users',userRoute);
app.use('/api/products',productRoute);
app.use('/api/carts',cartRoute);
app.use('/api/orders',orderRoute);
app.use('/api/checkout',paymentRoutes);

app.listen(process.env.PORT||8000,()=>{
    console.log('server running')
})