const mongoose = require("mongoose");

const schema = mongoose.Schema

const groupmembersSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    groupid: { type: String },
    members: { type: String },
    
    
})

const groupmembersModel = mongoose.model('cart_tb',groupmembersSchema)
module.exports = groupmembersModel