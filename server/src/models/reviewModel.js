const mongoose = require("mongoose");

const schema = mongoose.Schema;

const reviewSchema = new schema({
  login_id: { type: mongoose.Types.ObjectId, ref: "login_tb" },
  artitems_id: { type: mongoose.Types.ObjectId, ref: "artitems_tb" },
  message: { type: String },
  date: { type: String },
  time: { type: String } // Fix the data type to String
});

const reviewModel = mongoose.model("review_tb", reviewSchema);
module.exports = reviewModel;
