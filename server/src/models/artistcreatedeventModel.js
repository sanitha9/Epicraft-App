const mongoose = require('mongoose')
const schema = mongoose.Schema

const artisteventSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    eventName:{type:String},
    date:{type:Date},
    priceSeat:{type:Number},
    description:{type:String},
    image:{type:String},
    location:{type:String},
    category_id:{type:mongoose.Types.ObjectId,ref:"category_tb"},
 
})

const artistcreatedeventModel = mongoose.model('addevent_tb', artisteventSchema)
module.exports = artistcreatedeventModel