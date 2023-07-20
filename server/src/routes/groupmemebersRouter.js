const express = require('express');
const groupmembersModel = require('../models/groupmembersModel');
const groupmembersRouter = express.Router()
groupmembersRouter.post('/grpmembers',async(req,res)=>{
    try{

        const data = {
          
            login_id:req.body.login_id,
            group_id:req.body.group_id,
            members:req.body.members,
           
          }
          const savedData = await groupmembersModel(data).save();
      
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
      module.exports=groupmembersRouter

    