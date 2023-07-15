const mongoose = require("mongoose");

const schema = mongoose.Schema

const cartSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    artname: { type: String },
    product_id: {type:mongoose.Types.ObjectId,ref:"artitems_tb"},
    quantity: { type: String },
    product_image: { type: String },
    price: { type: String },
    
})

const cartModel = mongoose.model('cart_tb',cartSchema)
module.exports = cartModel