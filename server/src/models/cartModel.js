const mongoose = require("mongoose");

const schema = mongoose.Schema

const cartSchema = new schema({
    product_name: { type: String },
    product_id: { type: String },
    quantity: { type: String },
    product_image: { type: String },
    price: { type: String },
    
})

const cartModel = mongoose.model('cart_tb',cartSchema)
module.exports = cartModel