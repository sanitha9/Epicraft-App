const express = require('express');
const categoryModel = require('../models/categoryModel');
const categoryRouter = express.Router()
categoryRouter.post('/category',async(req,res)=>{
    try{

        const data = {
            categoryName:req.body.category
            
          }
          const savedData = await categoryModel(data).save();
      
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
      module.exports=categoryRouter

    