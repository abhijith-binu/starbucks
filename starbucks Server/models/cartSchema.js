const mongoose = require('mongoose')

const cartSchema = new mongoose.Schema({
    id:{
        type:Number,
        required:true,
        unique:true
    },
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    granttotal:{
        type:Number,
        required:true
    }
})

// create model to store product
const carts = new mongoose.model("carts",cartSchema)

// export
module.exports = carts