const express = require('express')
const userRegisterModel = require('../models/userRegisterModel')
const loginModel = require('../models/loginModel')
const artistRegisterModel = require('../models/artistRegisterModel')
const UserRegistrationRouter = express.Router()

UserRegistrationRouter.get('/view-user',async(req,res)=>{
    try {
        const users = await userRegisterModel.find()
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
    UserRegistrationRouter.get('/view-artist',async(req,res)=>{
        try {
            const artist = await artistRegisterModel.find()
            if(artist[0]!=undefined){
                return res.status(200).json({
                    success:true,
                    error:false,
                    data:artist
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
UserRegistrationRouter.post('/userReg',async(req,res)=>{
   try{
        const oldUser = await loginModel.findOne({username:req.body.username})
        if(oldUser){
            return res.status(406).json({sucess:false,
            error:true,
            message:"Username already exists"
            })
        }
        const oldEmail= await userRegisterModel.findOne({email:req.body.email})
        if(oldEmail){
            return res.status(406).json({sucess:false,
            error:true,
            message:"Email already exists"
            })
        }
        const login_data= {
            username:req.body.username,
            password:req.body.password,
            status:0,
            role:1
        }
        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data={
                login_id:save_login._id,
                name:req.body.name,
                dob:req.body.dob,
                address:req.body.address,
                gender:req.body.gender,
                mobile:req.body.mob,
                email:req.body.email
            }
            const save_register=await userRegisterModel(register_data).save()
            if(save_register){
                return res.status(201).json({
                    sucess:true,
                    error:false,
                    message:"Registration completed",
                    deatils:save_register
                })
            }
        }
    }catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            message:"Somethong went wrong",
            details:error
        })
    }
})

UserRegistrationRouter.post('/artistReg',async(req,res)=>{
    try{
        const oldUser = await loginModel.findOne({username:req.body.username})
        if(oldUser){
            return res.status(406).json({sucess:false,
            error:true,
            message:"Username already exists"
            })
        }
        const oldEmail= await artistRegisterModel.findOne({email:req.body.email})
        if(oldEmail){
            return res.status(406).json({sucess:false,
            error:true,
            message:"Email already exists"
            })
        }
        const login_data= {
            username:req.body.username,
            password:req.body.password,
            status:0,
            role:2
        }
        const save_login = await loginModel(login_data).save()
        if(save_login){
            const register_data={
                login_id:save_login._id,
                name:req.body.name,
                dob:req.body.dob,
                address:req.body.address,
                gender:req.body.gender,
                mobile:req.body.mob,
                category:req.body.category,
                email:req.body.email
            }
            const save_register=await artistRegisterModel(register_data).save()
            if(save_register){
                return res.status(201).json({
                    sucess:true,
                    error:false,
                    message:"Registration completed",
                    deatils:save_register
                })
            }
        }
    }catch(error){
        return res.status(400).json({
            success:false,
            error:true,
            message:"Somethong went wrong",
            details:error
        })
    }
})
    

module.exports=UserRegistrationRouter
