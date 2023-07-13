const express = require('express');
const customizerequestModel = require('../models/customizerequestModel');
const multer = require('multer');
const customizerequestRouter = express.Router()






var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

customizerequestRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})
customizerequestRouter.post('/request',async(req,res)=>{
    try{

        const data = {
          login_id:req.body.login_id,
          sendto:req.body.sendto,
          sendby:req.body.sendby,
          subject:req.body.subject,
          email:req.body.email,
          date:req.body.date,
          phone:req.body.phone,
          artist:req.body.artist,
          idea:req.body.idea,
          design:req.body.design,
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
    