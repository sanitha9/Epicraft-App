const express = require('express');
const customizerequestModel = require('../models/customizerequestModel');
const customizerequestRouter = express.Router()
customizerequestRouter.post('/request',async(req,res)=>{
    try{

        const data = {
            eventName:req.body.eventName,
            category_id:req.body.category_id,
            date:req.body.date,
            priceSeat:req.body.priceSeat,
            description:req.body.description,
            image:req.body.image,
            poster:req.body.poster
          }
          const savedData = await customizerequestModel(data).save();
      
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
      customizerequestRouter.get('/view-customized', async (req, res) => {
        try {
          const customizerequest = await customizerequestModel .find();
          if (customizerequest.length > 0) {
            return res.status(200).json({
              success: true,
              error: false,
              data:customizerequest
            });
          } else {
            return res.status(400).json({
              success: false,
              error: true,
              message: 'No data found',
            });
          }
        } catch (error) {
          return res.status(400).json({
            success: false,
            error: true,
            message: 'Something went wrong',
            details: error,
          });
        }
      });
      module.exports=customizerequestRouter
    