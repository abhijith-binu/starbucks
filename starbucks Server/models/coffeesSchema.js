const mongoose = require('mongoose')

const coffeesSchema = new mongoose.Schema({
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
const coffees = new mongoose.model("coffees",coffeesSchema)

// export
module.exports = coffees