const express = require('express');
const artistcreatedeventModel = require('../models/artistcreatedeventModel');
const artistcreatedeventRouter = express.Router()
artistcreatedeventRouter.post('/artistevent',async(req,res)=>{
    try{

        const data = {
          
            eventName:req.body.eventName,
            date:req.body.date,
            priceSeat:req.body.priceSeat,
            description:req.body.description,
            image:req.body.image,
            location:req.body.location,
            category_id:req.body.category_id,
          }
          const savedData = await artistcreatedeventModel(data).save();
      
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
      module.exports=artistcreatedeventRouter

    