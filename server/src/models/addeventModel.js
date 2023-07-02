const mongoose = require('mongoose')
const schema = mongoose.Schema

const addeventSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    eventName:{type:String},
    date:{type:Date},
    priceSeat:{type:Number},
    comments:{type:String},
    image:{type:String},
    poster:{type:String}
 
})

const addeventModel = mongoose.model('addevent_tb', addeventSchema)
module.exports = addeventModel