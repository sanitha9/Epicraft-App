const express = require('express');
const groupModel = require('../models/groupModel');
const groupRouter = express.Router()
groupRouter.post('/group',async(req,res)=>{
    try{

        const data = {
           
          groupname:req.body.groupname,
          coverphoto:req.body.coverphoto,
          privacy:req.body.privacy,
          description:req.body.description
            // date:req.body.date,
            // members:req.body.members
   
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
      groupRouter.get('/view-groups',async(req,res)=>{
        try {
            const group = await groupModel.find()
            if(group[0]!=undefined){
                return res.status(200).json({
                    success:true,
                    error:false,
                    data:group
                })
            }else{
                return res.status(400).json({
                    success:false,
                    error:true,
                    message:"No data found"
                })
            }
        } catch (error) {
            return res.status(400).json({
                success:false,
                error:true,
                message:"Something went wrong",
                details:error
            })
        }
        })
      module.exports=groupRouter

    