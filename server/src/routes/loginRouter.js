const express = require('express');
const loginModel=require('../models/loginModel');
const userRegisterModel=require('../models/userRegisterModel');
const artistRegisterModel = require('../models/artistRegisterModel');
const loginRouter = express.Router()
loginRouter.post('/login',async(req,res)=>{
    try{
        console.log(req.body.password);
        const oldUser=await loginModel.findOne({username:req.body.username})
        console.log(oldUser);
        if(!oldUser){
            return res.status(400).json({
                success:false,
                error:true,
                message:"User not found!"
            })
        }
         if(oldUser.password == req.body.password){
            if(oldUser.role==0){
                return res.status(200).json({
                    success:true,
                    error:false,
                    role:oldUser.role,
                    login_id:oldUser._id,
                    details:oldUser
                })

            }
            if(oldUser.role ==1){
                console.log("hi");
                const user = await userRegisterModel.findOne({login_id:
                    oldUser._id})
                    if(user){
                        if(oldUser.status==1){

                        return res.status(200).json({
                            success:true,
                            error:false,
                            role:oldUser.role,
                            login_id:oldUser._id,
                            user_id:user._id,
                            status:oldUser.status,
                            details:oldUser

                        })
                    }else{
                        return res.status(406).json({
                            success:false,
                            error:true,
                            message:"waiting for admin approval!"
            
                        })
                    }
                }
            }

            if(oldUser.role ==2){
                const  artist= await artistRegisterModel.findOne({login_id:
                    oldUser._id})
                    if(artist){
                        if(oldUser.status==1){
                        return res.status(200).json({
                            success:true,
                            error:false,
                            role:oldUser.role,
                            login_id:oldUser._id,
                            artist_id:artist._id,
                            status:oldUser.status,
                            details:oldUser

                        })
                    }else{
                        return res.status(406).json({
                            success:false,
                            error:true,
                            message:"waiting for admin approval!"
            
                        })
                    }
                }
            }


        }else{
                return res.status(400).json({
                    success:false,
                    error:true,
                    message:"Password not matching!"
                })
            }
        }
              catch(error){
            return res.status(400).json({
                success:false,
                error:true,
                message:"Somethong went wrong",
                details:error
            })
        }
    })
          
    loginRouter.post('/change-password/:id', async (req, res) => {
        try {
          const id = req.params.id;
          const { login_id, oldPassword, newPassword } = req.body;
      
          const user = await loginModel.findOne({ _id: id });
      
          if (!user) {
            return res.status(400).json({
              success: false,
              error: true,
              message: "User not found!"
            });
          }
      
          if (user.password !== oldPassword) {
            return res.status(406).json({
              success: false,
              error: true,
              message: "Old password is incorrect!"
            });
          }
      
          user.password = newPassword;
          await user.save();
      
          return res.status(200).json({
            success: true,
            error: false,
            message: "Password changed successfully!"
          });
        } catch (error) {
          return res.status(400).json({
            success: false,
            error: true,
            message: "Something went wrong",
            details: error
          });
        }
      });
    
    
  

module.exports=loginRouter