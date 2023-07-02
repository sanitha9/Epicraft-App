const mongoose = require('mongoose')
const schema = mongoose.Schema

const artitemsSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    artname:{type:String},
    description:{type:String},
    price:{type:Number},
    category_id:{type:mongoose.Types.ObjectId,ref:"category_tb"},
    image:{type:String}
 
})

const artItemsModel = mongoose.model('artItems_tb', artitemsSchema)
module.exports = artItemsModel