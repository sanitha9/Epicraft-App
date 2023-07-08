const mongoose = require("mongoose");

const schema = mongoose.Schema

const orderSchema = new schema({
    artitems_id: {type:mongoose.Types.ObjectId,ref:"artitems_tb"},
    user_id:{type:mongoose.Types.ObjectId,ref:"user_register_tb"},
    orderddate: { type: String },
    total: { type: String },
    status:{ type: String }
})

const orderModel = mongoose.model('order_tb',orderSchema)
   
module.exports = orderModel