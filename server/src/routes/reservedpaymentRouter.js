const express = require('express');
const reservedpaymentModel = require('../models/reservedpaymentModel ');
const reservedpaymentRouter = express.Router()
reservedpaymentRouter.post('/reservepayment',async(req,res)=>{
    try{

        const data = {
            nameoncard:req.body.nameoncard,
            creditcardnumber:req.body.creditcardnumber,
            ExpMonth:req.body.ExpMonth,
            ExpYear:req.body.ExpYear,
            cvv:req.body.cvv
   
          }
          const savedData = await reservedpaymentModel(data).save();
      
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
      module.exports=reservedpaymentRouter

    



          
            