const mongoose = require('mongoose')
const schema = mongoose.Schema

const artistRegisterSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
    name:{type:String},
    dob:{type:String},
    address:{type:String},
    gender:{type:String},
    mobile:{type:String},
    category:{type:String},
    email:{type:String}
})

const artistRegisterModel = mongoose.model('artist_register_tb',artistRegisterSchema)
module.exports = artistRegisterModel