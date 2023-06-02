// import model
const eats = require('../models/eatsSchema')


exports.getalleats = async (req,res)=>{
    try{
   alleats =  await eats.find()
   res.status(200).json(alleats)

    }
    catch(error){
        res.status(401).json(error)

    }

}