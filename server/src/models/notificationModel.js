const mongoose = require('mongoose')
const schema = mongoose.Schema

const notificationSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    groupName:{type:String},
    coverphoto:{type:String},
    description:{type:String},
    date:{type:String},
    members:{type:Number}
   
 
})

const notificationModel = mongoose.model('notification_tb',notificationSchema)
module.exports = notificationModel