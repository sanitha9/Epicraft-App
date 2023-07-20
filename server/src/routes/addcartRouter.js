// Assuming you have required the necessary dependencies and configured the database connection

const express = require('express');
const cartModel = require('../models/cartModel');
const cartRouter = express.Router();

cartRouter.post('/add-to-cart', async (req, res) => {
  try {
    const { login_id, product_id, artname,product_image,quantity,price } = req.body;
    const existingCartItem = await cartModel.findOne({ login_id, product_id });

    if (existingCartItem) {
      return res.status(400).json({
        success: false,
        error: true,
        message: "Item already exists in the cart",
      }); 
    }
    const data = {
      login_id:req.body.login_id,
      product_id: req.body.product_id,
      artname: req.body.artname,
      quantity: 1,
      product_image: req.body.product_image,
      price: req.body.price,
    };

    const newCart = new cartModel(data);
    const savedData = await newCart.save();

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Cart added successfully',
        data: savedData,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'Failed to add cart',
      });
    }
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});

cartRouter.get('/view-cart/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const cart = await cartModel.find({ login_id: id });
    if (cart.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: cart,
      });
    } else {
      return res.status(400).json({
        success: false,
        error: true,
        message: 'No data found',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});


cartRouter.delete('/delete-cart/:id', async (req, res) => {
  try {
    const cartItemId = req.params.id;
    const deletedCartItem = await cartModel.findByIdAndDelete(cartItemId);
    
    if (deletedCartItem) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Cart item deleted successfully',
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Cart item not found',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});
cartRouter.put('/update-cart/:id', async (req, res) => {
  try {
    const itemId = req.params.id;
    const updatedQuantity = req.body.quantity;

    const updatedCartItem = await cartModel.findByIdAndUpdate(
      itemId,
      { quantity:updatedQuantity },
      { new: true }
    );

    if (updatedCartItem) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Cart item updated successfully',
        data: updatedCartItem,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Cart item not found',
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: 'Something went wrong',
      details: error,
    });
  }
});


module.exports = cartRouter;
