const express = require('express');
const groupModel = require('../models/groupModel');
const groupRouter = express.Router()
const multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
      cb(null, "../client/public/upload")
  },
  filename: function (req, file, cb) {
      cb(null, file.originalname)
  }
})

var upload = multer({ storage: storage })

groupRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})


groupRouter.post('/group',async(req,res)=>{
    try{

        const data = {
           
          groupname:req.body.groupname,
          coverphoto:req.body.coverphoto,
          privacy:req.body.privacy,
          description:req.body.description,
          status:'0'
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
        groupRouter.get('/approve/:id', async (req, res) => {
          try {
            const id = req.params.id;
        
            const approve = await groupModel.updateOne({ _id: id }, { $set: { status: 1 } });
        
            if (approve && approve.modifiedCount === 1) {
              return res.status(200).json({
                success: true,
                message: 'group approved',
              });
            } else if (approve && approve.modifiedCount === 0) {
              return res.status(400).json({
                success: false,
                message: 'group not found or already approved',
              });
            } else {
              throw new Error('Error updating user');
            }
          } catch (error) {
            return res.status(400).json({
              success: false,
              message: 'Something went wrong',
              details: error.message,
            });
          }
        });
        groupRouter.get('/reject/:id', async (req, res) => {
          try {
            const id = req.params.id;
        
            const reject = await groupModel.deleteOne({ _id: id });
        
            if (reject && reject.deletedCount === 1) {
              return res.status(200).json({
                success: true,
                message: 'group rejected',
              });
            } else if (reject && reject.deletedCount === 0) {
              return res.status(400).json({
                success: false,
                message: 'group not found or already rejected',
              });
            } else {
              throw new Error('Error deleting group');
            }
          } catch (error) {
            return res.status(400).json({
              success: false,
              message: 'Something went wrong',
              details: error.message,
            });
          }
        });
      module.exports=groupRouter

    