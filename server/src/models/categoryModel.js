const mongoose = require('mongoose')
const schema = mongoose.Schema

const categorySchema = new schema({
    categoryName:{type:String},
})

const categoryModel = mongoose.model('category_tb', categorySchema)
module.exports = categoryModel