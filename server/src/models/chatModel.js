const mongoose = require('mongoose')
const schema = mongoose.Schema

const chatSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    artistloginid:{type:String},
    message:{type:String},
    sender:{type:String},
    receiver:{type:String},
    date:{type:Date},
    time:{type:String},
    reply:{type:String}
    })

const chatModel = mongoose.model('chats_tb', chatSchema)
module.exports = chatModel