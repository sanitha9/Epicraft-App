const express = require('express');
const billingaddressModel = require('../models/billingaddressModel');
const billingaddressRouter = express.Router()
billingaddressRouter.post('/billingaddress',async(req,res)=>{
    try{

        const data = {
            name: req.body.name,
            email:req.body.email,
            address:req.body.address,
            city:req.body.city,
            state:req.body.state,
            zipcode:req.body.zipcode,
            nameoncard:req.body.nameoncard,
            creditcardnumb:req.body.creditcardnumb,
            Expmonth:req.bodyExpmonth,
            ExpYear:req.body.ExpYear,
            cvv:req.body. cvv

          }
          const savedData = await billingaddressModel(data).save();
      
          if (savedData) {
            return res.status(200).json({
              success: true,
              error: false,
              message: "Data stored",
              details: savedData
            })
          }
        } catch (error) {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Something went wrong",
            details: error
          })
        }
      })
      module.exports=billingaddressRouter
    