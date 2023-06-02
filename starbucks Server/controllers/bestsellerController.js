// import model
const Bestsellers = require('../models/bestsellerSchema')


exports.getallbestsellers = async (req,res)=>{
    try{
   allBestsellers =  await Bestsellers.find()
   res.status(200).json(allBestsellers)

    }
    catch(error){
        res.status(401).json(error)

    }

}