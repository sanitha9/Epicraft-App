const express = require('express');
const loginModel=require('../models/loginModel');
const userRegisterModel=require('../models/userRegisterModel');
const artistRegisterModel = require('../models/artistRegisterModel');
const loginRouter = express.Router()
loginRouter.post('/login',async(req,res)=>{
    try{
        const oldUser=await loginModel.findOne({username:req.body.username})
        if(!oldUser){
            return res.status(400).json({
                success:false,
                error:true,
                message:"User not found!"
            })
        }
         if(oldUser.password == req.body.Password){
            if(oldUser.role==0){
                return res.status(200).json({
                    success:true,
                    error:false,
                    login_id:oldUser._id,
                    details:oldUser
                })

            }
            if(oldUser.role ==1){
                const user = await userRegisterModel.findOne({login_id:
                    oldUser._id})
                    if(user){
                        return res.status(200).json({
                            success:true,
                            error:false,
                            login_id:oldUser._id,
                            user_id:user._id,
                            status:oldUser.status,
                            details:oldUser

                        })
                    }
            }

            if(oldUser.role ==2){
                const  artist= await artistRegisterModel.findOne({login_id:
                    oldUser._id})
                    if(artist){
                        return res.status(200).json({
                            success:true,
                            error:false,
                            login_id:oldUser._id,
                            artist_id:artist._id,
                            status:oldUser.status,
                            details:oldUser

                        })
                    }
            }


        }else{
                return res.status(406).json({
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
          
    
  

module.exports=loginRouter