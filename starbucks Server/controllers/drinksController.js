// import model
const drinks = require('../models/drinksSchema')


exports.getalldrinks = async (req,res)=>{
    try{
   alldrinks =  await drinks.find()
   res.status(200).json(alldrinks)

    }
    catch(error){
        res.status(401).json(error)

    }

}