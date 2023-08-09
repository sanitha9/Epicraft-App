const mongoose = require('mongoose');
const schema = mongoose.Schema;

const customizepaymentSchema = new schema({
    login_id: { type: mongoose.Types.ObjectId, ref: "login_tb" },
   
    cardno:{ type: String },
    name: { type: String },
    cvv: { type: Number },
    month: { type: String },
    price: { type: String }
});

const customizepaymentModel = mongoose.model('customizepayment_tb', customizepaymentSchema);
module.exports = customizepaymentModel;
