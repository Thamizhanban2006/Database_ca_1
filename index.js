const express = require('express');
const app = express();
const PORT = 3000;
const mongoose = require('mongoose');

app.use(express.json());

app.get('/',(req,res)=>{
    res.send("Hello!");
})

const restaurantSchema = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    City:{
        type:String,
        required:true
    },
    ItemsArray:{
        type:[String]
    }
});

const itemScehma = new mongoose.Schema({
    Name:{
        type:String,
        required:true,
    },
    Price:{
        type:Number,
        required:true
    }
});

const Restaurant = mongoose.model("Restaurant",restaurantSchema);
const Items = mongoose.model("Items",itemScehma)



app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})