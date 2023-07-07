const express = require('express');
const reserveModel = require('../models/reserveModel');
const reserveRouter = express.Router()
reserveRouter.post('/reserve',async(req,res)=>{
    try{

        const data = {
           
            checkin:req.body.checkin,
            checkout:req.body.checkout,
            adults:req.body.adults,
            children:req.body.children,
            email:req.body.email,
            phone:req.body.phone,
            amount:req.body.amount
   
          }
          const savedData = await reserveModel(data).save();
      
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
      module.exports=reserveRouter

    