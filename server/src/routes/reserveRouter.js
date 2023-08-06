const express = require('express');
const reserveModel = require('../models/reserveModel');
const reserveRouter = express.Router()
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
      module.exports=reserveRouter

    