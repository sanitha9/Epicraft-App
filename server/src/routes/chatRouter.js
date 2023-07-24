const express = require('express');
const chatModel = require('../models/chatModel');
const chatRouter = express.Router()
chatRouter.post('/chat',async(req,res)=>{
    try{

        const data = {
            login_id:req.body.login_id,
            message:req.body.message,
            sender:req.body.sender,
            receiver:req.body.receiver,
            date:req.body.date,
            time:req.body.time,
            artistloginid:req.body.artistloginid,
            reply:null
          }
          const savedData = await chatModel(data).save();
      
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
      module.exports=chatRouter

    