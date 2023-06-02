const mongoose = require('mongoose')

const bestsellerSchema = new mongoose.Schema({
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
const bestsellers = new mongoose.model("bestsellers",bestsellerSchema)

// export
module.exports = bestsellers