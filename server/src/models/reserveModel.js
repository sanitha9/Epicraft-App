const mongoose = require('mongoose')
const schema = mongoose.Schema

const reserveSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    checkin:{type:String},
    checkout:{type:String},
    adults:{type:Number},
    children:{type:String},
    email:{type:String},
    phone:{type:String},
    
})

const reserveModel = mongoose.model('reserve_tb',reserveSchema)
module.exports = reserveModel