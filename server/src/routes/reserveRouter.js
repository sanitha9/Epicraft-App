const express = require('express');
const reserveModel = require('../models/reserveModel');
const reserveRouter = express.Router()
reserveRouter.get('/view-vishnu', async (req, res) => {
  try {
   
    const users = await reserveModel.aggregate([
      {
        '$lookup': {
          'from': 'user_register_tbs', 
          'localField': 'login_id', 
          'foreignField': 'login_id', 
          'as': 'result'
        }
      },
      {
        '$lookup': {
          'from': 'addevent_tbs', 
          'localField': 'exhibn_id', 
          'foreignField': '_id', 
          'as': 'vishnu'
        }
      },
      {
        "$unwind": "$result"
      },
      {
        "$unwind": "$vishnu"
      },
      {
        "$group": {
          '_id': "$_id",
          'name': { "$first": "$result.name" },
          'eventName': { "$first": "$vishnu.eventName"},
          'checkin': { "$first": "$checkin" },
          'checkout': { "$first": "$checkout" },
          'adults': { "$first": "$adults" },
          'children': { "$first": "$children" },
          'email': { "$first": "$email" },
          'phone': { "$first": "$phone" },
          'amount': { "$first": "$amount" },
          'bookingid': { "$first":"$bookingid" },
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
reserveRouter.post('/reserve',async(req,res)=>{
    try{
      const bookingId = generateRandomNumberString(3);

        const data = {
            login_id:req.body.login_id,
            exhibn_id:req.body.exhibn_id,
            checkin:req.body.checkin,
            checkout:req.body.checkout,
            adults:req.body.adults,
            children:req.body.children,
            email:req.body.email,
            phone:req.body.phone,
            amount:req.body.amount,
            bookingid:bookingId,
   
          }
          const savedData = await reserveModel(data).save();
      
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



      const generateRandomNumberString = (length) => {
        const numbers = '0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
          const randomIndex = Math.floor(Math.random() * numbers.length);
          result += numbers[randomIndex];
        }
        return result;
      };



      reserveRouter.get('/view-reserve/:id',async(req,res)=>{
        try {
          const id = req.params.id;
            const art = await reserveModel.find({login_id:id});
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
      module.exports=reserveRouter

    