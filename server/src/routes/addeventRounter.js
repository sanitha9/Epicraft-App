const express = require('express');
const addeventModel = require('../models/addeventModel');
const addeventRouter = express.Router()
addeventRouter.post('/addevent',async(req,res)=>{
    try{

        const data = {
            eventName:req.body.eventName,
            date:req.body.date,
            priceSeat:req.body.priceSeat,
            comments:req.body.comments,
            image:req.body.image,
            poster:req.body.poster
          }
          const savedData = await addeventModel(data).save();
      
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
      module.exports=addeventRouter

    