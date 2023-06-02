// import cart collection
const carts = require('../models/cartSchema')

// add to cart
exports.addtocart = async (req,res)=>{
    // get product details from request
    const {id,title,price,quantity,image} = req.body

    // logic
    try{
        // check if product is already in cart
        const product = await carts.findOne({id})

        if(product){
            // if product is in cart
            // add quantity
            product.quantity+=1
            // update grant total
            product.granttotal = product.price *product.quantity
            // to save change in mongodb
            product.save()
            // sent response to client
            res.status(200).json("Items added to your cart...")
        }
        else{
            // if product is not in cart
            // add product to cart
            const newProduct =new carts({
                id,title,price,quantity,image,granttotal:price
            })
            // to save new product to mongodb
             await newProduct.save()
             res.status(200).json("Item added to your cart")
        }

    }
    catch(error){
        res.status(401).json(error)
    }
}

// get cart
exports.getCart = async (req,res)=>{
    try{
     // get all items from cart collection
     const allItems = await carts.find()
     res.status(200).json(allItems)
    }
    catch(error){
        res.status(401).json(error)
    }
}

// removecartitem
exports.removecartitem = async (req,res)=>{
    // get product id from req
    const {id} = req.params
     try{
    const removeitem = await carts.deleteOne({id})
    if(removeitem){
        const allItems = await carts.find()
        res.status(200).json(allItems)
    }
    else{
        res.status(401).json("Item not found")
    }
     }
     catch(error){
        res.status(401).json(error)
     }
}