const express = require('express')

// import bestseller controller
const BestSellerController = require('../controllers/bestsellerController')

// import drinks controller
const DrinksController = require('../controllers/drinksController')

// import cart controller
const cartController = require('../controllers/cartController')

// import foods controller
const FoodsController = require('../controllers/foodsControllers')

// import merch controller
const MerchController = require('../controllers/merchandisesController')

// import coffee controller
const CoffeeController = require('../controllers/coffeesControllers')

// import eats controllers
const EatsController = require('../controllers/eatsControllers')

const router = new express.Router()



router.get('/products/bestseller',BestSellerController.getallbestsellers)

router.get('/products/drinks',DrinksController.getalldrinks)

router.get('/products/foods',FoodsController.getallfoods)

router.get('/products/merchandises',MerchController.getallmerch)

router.get('/products/coffees',CoffeeController.getallcoffees)

router.get('/products/readytoeat',EatsController.getalleats)

router.post('/cart/add-product',cartController.addtocart)

// get-cart
router.get('/cart/all-products',cartController.getCart)

router.delete('/cart/remove-item/:id',cartController.removecartitem)

module.exports = router