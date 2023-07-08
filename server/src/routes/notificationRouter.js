const express = require('express');
const notificationModel = require('../models/notificationModel ');
const notificationRouter = express.Router()
notificationRouter.post('/notification-view',async(req,res)=>{
    try{

        const data = {
            login_id:req.body.login_id,
            contents:req.body.contents,
            
            description:req.body.description,
            date:req.body.date,
            time:req.body.time
   
          }
          const savedData = await notificationModel(data).save();
      
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
      module.exports=notificationRouter

    