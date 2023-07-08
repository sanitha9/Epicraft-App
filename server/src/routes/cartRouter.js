const express = require('express');

const cartModel = require('../models/cartModel');
const cartRouter = express.Router();

cartRouter.post('/cart', async function (req, res) {
  try {
    const data = {
        product_name: req.body. product_name ,
        product_id: req.body.product_id,
        quantity: req.body.quantity,
        product_image: req.body.product_image,
        price: req.body.price, 
       
      
    };
    const datas = await cartModel(data).save()
    console.log(data);
    
  } catch (error) {
    
  }
});

module.exports = cartRouter;