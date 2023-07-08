const express = require('express');
const orderModel = require('../models/orderModel');
const orderRouter = express.Router()
orderRouter.post('/order',async(req,res)=>{
    try{

        const data = {
            
            artitems_id:req.body.artitems_id,
            user_id:req.body.user_id,
            orderddate:req.body.orderddate,
            total:req.body.total,
            status:req.body.status
          }
          const savedData = await orderModel(data).save();
      
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
      module.exports=orderRouter

    