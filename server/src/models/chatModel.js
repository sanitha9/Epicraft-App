const mongoose = require('mongoose')
const schema = mongoose.Schema

const chatSchema = new schema({
    // login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    login_id:{type:mongoose.Types.ObjectId,ref:"user_register_tb"},
    artistloginid:{type:mongoose.Types.ObjectId, ref:"login_tb"},
    message:{type:String},
    sender:{type:String},
    receiver:{type:String},
    date:{type:Date},
    time:{type:String},
    reply:{type:String}
    })

const chatModel = mongoose.model('chats_tb', chatSchema)
module.exports = chatModel