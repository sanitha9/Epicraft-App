const mongoose = require('mongoose')
const schema = mongoose.Schema

const reservedpaymentSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    nameoncard:{type:String},
    creditcardnumber:{type:String},
    ExpMonth:{type:Number},
    ExpYear:{type:Number},
    cvv:{type:String},
    price:{type:String}
    
    
})

const reservedpaymentModel = mongoose.model('reservedPayment_tb',reservedpaymentSchema)
module.exports = reservedpaymentModel