const mongoose = require('mongoose')
const schema = mongoose.Schema

const groupSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    groupname:{type:String},
    coverphoto:{type:String},
    privacy:{type:String},
    description:{type:String},
    // members:{type:Number}
   
 
})

const groupModel = mongoose.model('group_tb', groupSchema)
module.exports = groupModel