const express = require('express');
const customizepaymentModel = require('../models/customizepaymentModel');

const customizepaymentRouter = express.Router();

customizepaymentRouter.post('/payment', async (req, res) => {
  try {
    const data = {
      login_id: req.body.login_id,
      cardno: req.body.cardno,
      name: req.body.name,
      ExpYear: req.body.ExpYear,
      cvv: req.body.cvv,
      month:req.body.month,
      price: req.body.price,
    };

    const savedData = await customizepaymentModel.create(data);

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

module.exports = customizepaymentRouter;
