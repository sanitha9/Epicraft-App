const express = require('express');
const CommentsModel = require('../models/CommentsModel');
const { default: mongoose } = require('mongoose');
const CommentsRouter = express.Router()
const Object = mongoose.Types.ObjectId
CommentsRouter.post('/comment',async(req,res)=>{
    try{
      const dateString =  new Date();
      const date = new Date(dateString);
      const formattedDate = date.toISOString().split('T')[0];
        const data = {
            login_id:req.body.login_id,
            comment:req.body.comment,
            productid:req.body.productid,
            date:formattedDate,
           
          }
          const savedData = await CommentsModel(data).save();
      
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
    //   CommentsRouter.get('/view-comments/:id', async (req, res) => {
    //     try {
          
    //       const id=req.params.id
    //       console.log(id);
    //         const description = await CommentsModel.aggregate([
                
    //             {
    //                 '$lookup': {
    //                   'from': 'user_register_tbs', 
    //                   'localField': 'login_id', 
    //                   'foreignField': '_id', 
    //                   'as': 'userinfo'
    //                 }
    //               },
    //               { "$unwind": "$userinfo" },
    //               {
    //                 '$lookup': {
    //                     'from': 'artitems_tbs', 
    //                     'localField': 'productid', 
    //                     'foreignField': '_id', 
    //                     'as': 'item'
    //                 }

    //             },
    //               { "$unwind": "$item" },

    //               {'$match':{'_id':new Object(id)
    //               }},
    //                  {
    //                      "$group": {
    //                          '_id': "$_id",
    //                          'username': { "$first": "$userinfo.name" },                        
    //                          'artname': { "$first": "$item.artname" },
    //                          'comment': { "$first": "$comment" },
                             
                             
    //                         //'login_id': { "$first": "$login_id" },
    //                      }
    //                  }
    //               ])
          
    
    //         if (description[0] !== undefined) {
    //             return res.status(200).json({
    //                 success: true,
    //                 error: false,
    //                 data: description[0]
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


    CommentsRouter.get('/viewuser-comment', async (req, res) => {
      try {
        const users = await CommentsModel.aggregate([
          {
            '$lookup': {
              'from': 'user_register_tbs', 
              'localField': 'login_id', 
              'foreignField': 'login_id', 
              'as': 'user'
            }
          },
          {
              '$lookup': {
                'from': 'artitems_tbs', 
                'localField': 'productid', 
                'foreignField': '_id', 
                'as': 'item'
              }
            },{
              "$unwind":"$user"
          },{
            "$unwind":"$item"
        },
        {
          "$group":{
              '_id':"$_id",
              'name':{"$first":"$user.name"},
              'artname':{"$first":"$item.artname"},
              'productid':{"$first":"$item._id"},
              'date':{"$first":"$date"},
              'comment':{"$first":"$comment"}

          }
      }
        ])
    
    
    
        if (users[0] != undefined) {
          return res.status(200).json({
            success: true,
            error: false,
            data: users
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



    CommentsRouter.get('/view-comments/:id',async(req,res)=>{
        try {
            const sid=req.params.id
            console.log(sid);
            const users = await CommentsModel.aggregate([
                {
                  '$lookup': {
                    'from': 'user_register_tbs', 
                    'localField': 'login_id', 
                    'foreignField': 'login_id', 
                    'as': 'user'
                  }
                },
                {
                    '$lookup': {
                      'from': 'artitems_tbs', 
                      'localField': 'productid', 
                      'foreignField': '_id', 
                      'as': 'item'
                    }
                  },
                {
                    "$unwind":"$user"
                },
                {'$match':{'productid':new Object(sid)}},
                {
                    "$unwind":"$item"
                },
               
                {
                    "$group":{
                        '_id':"$_id",
                        'name':{"$first":"$user.name"},
                        'artname':{"$first":"$item.artname"},
                        'productid':{"$first":"$item._id"},
                        'date':{"$first":"$date"},
                        'comment':{"$first":"$comment"}

                    }
                }
              ])
            if(users[0]!=undefined){
                return res.status(200).json({
                    success:true,
                    error:false,
                    data:users
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
      module.exports=CommentsRouter

      