const mongoose = require('mongoose')
const schema = mongoose.Schema

const reserveSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    exhibn_id:{type:mongoose.Types.ObjectId,ref:"addevent_tbs"},
    checkin:{type:String},
    checkout:{type:String},
    adults:{type:Number},
    children:{type:Number},
    email:{type:String},
    phone:{type:String},
    amount:{type:String},
    bookingid:{type:String},
    
})

const reserveModel = mongoose.model('reserveexhibition_tb',reserveSchema)
module.exports = reserveModel