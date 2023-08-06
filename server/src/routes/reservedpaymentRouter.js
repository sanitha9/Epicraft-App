const express = require('express');
const reservedpaymentModel = require('../models/reservedpaymentModel');

const reservedpaymentRouter = express.Router();

reservedpaymentRouter.post('/reservepayments', async (req, res) => {
  try {
    const data = {
      login_id: req.body.login_id,
      exhibn_id: req.body.exhibn_id,
      nameoncard: req.body.nameoncard,
      creditcardnumber: req.body.creditcardnumber,
      ExpMonth: req.body.ExpMonth,
      ExpYear: req.body.ExpYear,
      cvv: req.body.cvv,
      price: req.body.price,
    };

    const savedData = await reservedpaymentModel.create(data);

    if (savedData) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Data stored",
        details: savedData,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: true,
        message: "Data could not be saved",
        details: null,
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error.message,
    });
  }
});

module.exports = reservedpaymentRouter;
