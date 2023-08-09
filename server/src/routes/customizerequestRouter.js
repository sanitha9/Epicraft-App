const express = require('express');
const customizerequestModel = require('../models/customizerequestModel');
const multer = require('multer');
const { default: mongoose } = require('mongoose');
const customizerequestRouter = express.Router()
const Object = mongoose.Types.ObjectId





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
          user_id:req.body.user_id,
          sendto:req.body.sendto,
          sendby:req.body.sendby,
          subject:req.body.subject,
          email:req.body.email,
          date:req.body.date,
          phone:req.body.phone,
          artist:req.body.artist,
          idea:req.body.idea,
          design:req.body.design,
          status:0
        
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
      customizerequestRouter.get('/view-customized',async (req, res) => {
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
      customizerequestRouter.get('/approve-work/:id', async (req, res) => {
        try {
          const id = req.params.id;
      
          const approve = await customizerequestModel.updateOne({ _id: id }, { $set: { status: 1 } });
      
          if (approve && approve.modifiedCount === 1) {
            return res.status(200).json({
              success: true,
              message: 'work approved',
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



      customizerequestRouter.get('/finish-work/:id', async (req, res) => {
        try {
          const id = req.params.id;
      
          const approve = await customizerequestModel.updateOne({ _id: id }, { $set: { status: 2 } });
      
          if (approve && approve.modifiedCount === 1) {
            return res.status(200).json({
              success: true,
              message: 'work approved',
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
      customizerequestRouter.get('/completed-work/:id', async (req, res) => {
        try {
          const id = req.params.id;
      
          const approve = await customizerequestModel.updateOne({ _id: id }, { $set: { status: 2 } });
      
          if (approve && approve.modifiedCount === 1) {
            return res.status(200).json({
              success: true,
              message: 'work approved',
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
    //   customizerequestRouter.get('/view-status/:id', async (req, res) => {
    //     try {
    //       const user_id=req.params.id
    //         const customizerequest = await customizerequestModel.aggregate([
                
    //                 {
    //                     '$lookup': {
    //                         'from': 'user_register_tbs',
    //                         'localField': 'user_id',
    //                         'foreignField': '_id',
    //                         'as': 'customize'
    //                     }
    //                 },
    
    
    //                 { "$unwind": "$customize" },
    //                 // {
    //                 //     "$group": {
    //                 //         '_id': "$_id",
    //                 //         'sendto': { "$first": "$sendto" },
    //                 //         'sendby': { "$first": "$sendby" },
    //                 //         'subject': { "$first": "$subject" },
    //                 //         'email': { "$first": "$email" },
    //                 //         'date': { "$first": "$date" },
    //                 //         'phone': { "$first": "$phone" },
    //                 //         'idea': { "$first": "$idea" },
    //                 //         'design': { "$first": "$design" },
    //                 //         'login_id': { "$first": "$login._id" },
    //                 //     }
    //                 // }
    //               ])
          
    
    //         if (customizerequest[0] !== undefined) {
    //             return res.status(200).json({
    //                 success: true,
    //                 error: false,
    //                 data: customizerequest
    //             })
    //         } else {
    //             return res.status(400).json({
    //                 success: false,
    //                 error: true,
    //                 message: "No data found"
    //             })
    //         }
    //     } catch (error) {
    //         return res.status(400).json({
    //             success: false,
    //             error: true,
    //             message: "Something went wrong",
    //             details: error
    //         })
    //     }
    // })
    customizerequestRouter.get('/view-customized/:id', async (req, res) => {
      try {
        const user_id=req.params.id
          const customizerequest = await customizerequestModel.aggregate([
              
                  {
                      '$lookup': {
                          'from': 'user_register_tbs',
                          'localField': 'user_id',
                          'foreignField': '_id',
                          'as': 'customize'
                      }
                  },
  
  
                  { "$unwind": "$customize" },
                {'$match':{
                  'user_id':new Object(user_id)
                }},
                 
                  {
                      "$group": {
                          '_id': "$_id",
                          'sendto': { "$first": "$sendto" },                        
                          'subject': { "$first": "$subject" },
                          'email': { "$first": "$email" },
                          'status': { "$first": "$status" },
                          'date': { "$first": "$date" },
                          'idea': { "$first": "$idea" },
                          'design': { "$first": "$design" },
                          'login_id': { "$first": "$login_id" },
                      }
                  }
                ])
        
  
          if (customizerequest[0] !== undefined) {
              return res.status(200).json({
                  success: true,
                  error: false,
                  data: customizerequest
              })
          } else {
              return res.status(400).json({
                  success: false,
                  error: true,
                  message: "No data found"
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
  customizerequestRouter.get('/view-customized-artist/:id', async (req, res) => {
    try {
      const user_id=req.params.id
        const customizerequest = await customizerequestModel.aggregate([
            
                {
                    '$lookup': {
                        'from': 'user_register_tbs',
                        'localField': 'user_id',
                        'foreignField': '_id',
                        'as': 'customize'
                    }
                },


                { "$unwind": "$customize" },
              {'$match':{
                'artist':new Object(user_id)
              }},
              // {'$match':{
              //   'status':'0'
              // }},
                // {
                //     "$group": {
                //         '_id': "$_id",
                //         'sendto': { "$first": "$sendto" },                        
                //         'subject': { "$first": "$subject" },
                //         'email': { "$first": "$email" },
                //         'status': { "$first": "$status" },
                //         'phone': { "$first": "$phone" },
                //         'idea': { "$first": "$idea" },
                //         'design': { "$first": "$design" },
                //         'login_id': { "$first": "$login_id" },
                //     }
                // }
              ])
      

        if (customizerequest[0] !== undefined) {
            return res.status(200).json({
                success: true,
                error: false,
                data: customizerequest
            })
        } else {
            return res.status(400).json({
                success: false,
                error: true,
                message: "No data found"
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
    

      module.exports=customizerequestRouter
    