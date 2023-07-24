const express = require('express');
const artItemsModel = require('../models/artItemsModel');
const { default: mongoose } = require('mongoose');
const artItemsRouter = express.Router()
const multer = require('multer');
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

artItemsRouter.post('/upload', upload.single("file"), (req, res) => {
  return res.json("file uploaded")
})

artItemsRouter.post('/artitems',async(req,res)=>{
    try{
        const data = {
        login_id: req.body.login_id,
        // artist_id: req.body.artist_id,
        artname:req.body.artname,
        description:req.body.description,
        image:req.body.image,
        price:req.body.price,
        category_id:req.body.category
        
        };
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


      artItemsRouter.get('/view-artitems/:artistLognId',async(req,res)=>{
        try {
          const id = req.params.artistLognId;
            const art = await artItemsModel.find({login_id:id});
            if(art[0]!=undefined){
                return res.status(200).json({
                    success:true,
                    error:false,
                    data:art
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


        artItemsRouter.get('/view-artitems',async(req,res)=>{
          try {
              const art = await artItemsModel.find()
              if(art[0]!=undefined){
                  return res.status(200).json({
                      success:true,
                      error:false,
                      data:art
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


        artItemsRouter.delete('/delete-artitems/:id', async (req, res) => {
          try {
            const id = req.params.id;
          
            const deletedartItems = await artItemsModel.deleteOne({_id:id});
            if (deletedartItems) {
              return res.status(200).json({
                success: true,
                error: false,
                message: 'artitems  deleted successfully',
                data: deletedartItems,
              });
            } else {
              return res.status(404).json({
                success: false,
                error: true,
                message: 'artitems not found',
              });
            }
          } catch (error) {
            return res.status(500).json({
              success: false,
              error: true,
              message: 'Something went wrong',
              details: error,
            });
          }
        });

        artItemsRouter.post('/edit-artitem/:id', async (req, res) => {
          try {
            const id=req.params.id
             console.log('id',id);
            const data ={   
              artname:req.body.artname,
              category_id:req.body.category_id,
              price:req.body.price,
              description:req.body.description,
                   
              
            };
        
            const approve = await artItemsModel.updateOne({ _id: id }, { $set: data });
        
            if (approve) {
              return res.status(200).json({
                success: true,
                error: false,
                message: "Request Added",
                details: approve
              });
            }
        } catch (error) {
        console.log(error);
            return res.status(400).json({
              success: false,
              error: true,
              message: "Something went wrong",
              details: error
            });
          }
        });
  
//  artItemsRouter.get('/view-artdescription/:id', async (req, res) => {
          
            
//              try {
//               const id=req.params.id
//               console.log('id',id);
//               const description = await artItemsModel.findOne({_id:id});
//               if (description) {
//                 return res.status(200).json({
//                   success: true,
//                   error: false,
//                   data:description,
//                 });
//               } else {
//                 return res.status(400).json({
//                   success: false,
//                   error: true,
//                   message: 'No data found',
//                 });
//               }
//             } catch (error) {
//               return res.status(400).json({
//                 success: false,
//                 error: true,
//                 message: 'Something went wrong',
//                 details: error,
//               });
//             }
//           });

          artItemsRouter.get('/view-artdescription/:id', async (req, res) => {
            try {
              
              const id=req.params.id
              console.log(id);
                const description = await artItemsModel.aggregate([
                    
                  {
                    '$lookup': {
                      'from': 'category_tbs', 
                      'localField': 'category_id', 
                      'foreignField': '_id', 
                      'as': 'result'
                    }
                  },
        
        
                        { "$unwind": "$result" },
                      {'$match':{'_id':new Object(id)
                      }},
                         {
                             "$group": {
                                 '_id': "$_id",
                                 'artname': { "$first": "$artname" },                        
                                 'price': { "$first": "$price" },
                                 'description': { "$first": "$description" },
                                 'category': { "$first": "$category_id" },
                                'image': { "$first": "$image" },
                                 'categoryname': { "$first": "$result.categoryname"}
                                //'login_id': { "$first": "$login_id" },
                             }
                         }
                      ])
              
        
                if (description[0] !== undefined) {
                    return res.status(200).json({
                        success: true,
                        error: false,
                        data: description[0]
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



      module.exports=artItemsRouter

    