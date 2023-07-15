const mongoose = require('mongoose')
const schema = mongoose.Schema

const customizedSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    user_id:{type:mongoose.Types.ObjectId,ref:"user_register_tb"},
    sendto:{type:String},
    sendby:{type:String},
    subject:{type:String},
    email:{type:String},
    date:{type:Date},
    phone:{type:Number},
    artist:{type:mongoose.Types.ObjectId,ref:"artist_register_tb"},
    idea:{type:String},
    design:{type:String},
    status:{type:String}
   
   
})

const customizerequestModel = mongoose.model('customizerequests_tb',customizedSchema)
module.exports = customizerequestModel