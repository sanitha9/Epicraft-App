const express = require('express');
const artItemsModel = require('../models/artItemsModel');
const artItemsRouter = express.Router()
artItemsRouter.post('/artitems',async(req,res)=>{
    try{

        const data = {
            name: req.body.artName,
            email: req.body.description,
            address:req.body.price,
            city:req.body.category,
            state:req.body.image,
            zipcode
            

          }
          const savedData = await artItemsModel(data).save();
      
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
      module.exports=artItemsRouter

    