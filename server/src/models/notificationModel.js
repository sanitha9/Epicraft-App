const mongoose = require('mongoose')
const schema = mongoose.Schema

const notificationSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    contents:{type:String},
    date:{type:String},
    description:{type:String},
    time:{type:String}
   
 
})

const notificationModel = mongoose.model('notification_tb',notificationSchema)
module.exports = notificationModel