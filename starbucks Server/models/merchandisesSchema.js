const mongoose = require('mongoose')

const merchSchema = new mongoose.Schema({
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
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

// create model to store product
const merch = new mongoose.model("merchandises",merchSchema)

// export
module.exports = merch