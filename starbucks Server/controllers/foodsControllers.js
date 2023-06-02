// import model
const foods = require('../models/foodsSchema')


exports.getallfoods = async (req,res)=>{
    try{
   allFoods =  await foods.find()
   res.status(200).json(allFoods)

    }
    catch(error){
        res.status(401).json(error)

    }

}