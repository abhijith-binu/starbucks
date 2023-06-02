// import model
const coffees = require('../models/coffeesSchema')


exports.getallcoffees = async (req,res)=>{
    try{
   allcoffees =  await coffees.find()
   res.status(200).json(allcoffees)

    }
    catch(error){
        res.status(401).json(error)

    }

}