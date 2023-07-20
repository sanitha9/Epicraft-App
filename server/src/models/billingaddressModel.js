const mongoose = require('mongoose')
const schema = mongoose.Schema

const billingSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    cart_id:{type:mongoose.Types.ObjectId,ref:"cart_tb"},
    product_id:{type:mongoose.Types.ObjectId,ref:"artItems_tb"},
    order_id:{type:String},
    name:{type:String},
    email:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    date:{type:Date},
    quantity:{type:String},
    price:{type:String},
    totalAmount:{type:Number},
    zipcode:{type:Number},
    nameoncard:{type:String},
    creditcardnumb:{type:Number},
    Expmonth:{type:String},
    ExpYear:{type:Number},
    cvv:{type:Number}
})

const billingaddressModel = mongoose.model('billingaddress_tb', billingSchema)
module.exports = billingaddressModel