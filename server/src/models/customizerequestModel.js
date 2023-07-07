const mongoose = require('mongoose')
const schema = mongoose.Schema

const customizedSchema = new schema({
    login_id:{type:mongoose.Types.ObjectId,ref:"login_tb"},
     name:{type:String},
    email:{type:String},
    address:{type:String},
    city:{type:String},
    state:{type:String},
    zipcode:{type:Number},
    nameoncard:{type:String},
    creditcardnumb:{type:Number},
    Expmonth:{type:String},
    ExpYear:{type:Number},
    cvv:{typr:Number}
})

const customizerequestModel = mongoose.model('customizerequests_tb',customizedSchema)
module.exports = customizerequestModel