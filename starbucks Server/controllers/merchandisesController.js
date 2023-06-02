// import model
const merch = require('../models/merchandisesSchema')


exports.getallmerch = async (req,res)=>{
    try{
   allmerch =  await merch.find()
   res.status(200).json(allmerch)

    }
    catch(error){
        res.status(401).json(error)

    }

}