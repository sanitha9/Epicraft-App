const express = require('express');
const notificationModel = require('../models/notificationModel ');
const groupRouter = express.Router()
groupRouter.post('/group',async(req,res)=>{
    try{

        const data = {
           
            groupName:req.body.groupName,
            coverphoto:req.body.coverphoto,
            description:req.body.description,
            date:req.body.date,
            members:req.body.members
   
          }
          const savedData = await groupModel(data).save();
      
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
      module.exports=groupRouter

    