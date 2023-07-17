const mongoose = require('mongoose')
const schema = mongoose.Schema

const commentSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    comment:{type:String},
    productid:{type:mongoose.Types.ObjectId,ref:"artitems_tb"},
    date:{type:String},
    
})

const CommentsModel = mongoose.model('comment_tb',commentSchema)
module.exports = CommentsModel