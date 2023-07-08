const express = require('express');
const reviewModel = require('../models/reviewModel');
const reviewRouter = express.Router()
reviewRouter.post('/review',async(req,res)=>{
    try{

        const data = {
            login_id:req.body.login_id,
            message:req.body.message,
            artitems_id:req.body.artitems_id,
            date:req.body.String,
            time:req.body.String
          }
          const savedData = await reviewModel(data).save();
      
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
      module.exports=reviewRouter

    