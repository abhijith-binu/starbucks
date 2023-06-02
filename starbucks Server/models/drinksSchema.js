const mongoose = require('mongoose')

const drinksSchema = new mongoose.Schema({
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
const drinks = new mongoose.model("drinks",drinksSchema)

// export
module.exports = drinks