const mongoose = require('mongoose')
const schema = mongoose.Schema

const addeventSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    eventName:{type:String},
    date:{type:String},
    priceSeat:{type:Number},
    description:{type:String},
    image:{type:String},
    location:{type:String},
    status:{type:String},
    artist_id:{type:mongoose.Types.ObjectId,ref:"artist_register_tb"},
    category_id:{type:mongoose.Types.ObjectId,ref:"category_tb"},
 
})

const addeventModel = mongoose.model('addevent_tb', addeventSchema)
module.exports = addeventModel