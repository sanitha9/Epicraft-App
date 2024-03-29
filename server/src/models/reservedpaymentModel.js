const mongoose = require('mongoose');
const schema = mongoose.Schema;

const reservedpaymentSchema = new schema({
    login_id: { type: mongoose.Types.ObjectId, ref: "login_tb" },
    exhibn_id: { type: mongoose.Types.ObjectId, ref: "addevent_tbs" },
    nameoncard: { type: String },
    creditcardnumber:{ type: String },
    ExpMonth: { type: String },
    ExpYear: { type: Number },
    cvv: { type: String },
    price: { type: String }
});

const reservedpaymentModel = mongoose.model('reservedPayment_tb', reservedpaymentSchema);
module.exports = reservedpaymentModel;
