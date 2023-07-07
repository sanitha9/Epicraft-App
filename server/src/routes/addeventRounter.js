const express = require('express');
const addeventModel = require('../models/addeventModel');
const addeventRouter = express.Router()
addeventRouter.post('/addevent',async(req,res)=>{
    try{

        const data = {
            eventName:req.body.eventName,
            category_id:req.body.category_id,
            date:req.body.date,
            priceSeat:req.body.priceSeat,
            description:req.body.description,
            image:req.body.image,
            location:req.body.location
          }
          const savedData = await addeventModel(data).save();
      
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
      addeventRouter.get('/view-event', async (req, res) => {
        try {
          const event = await addeventModel.aggregate([
            {
              '$lookup': {
                'from': 'category_tbs', 
                'localField': 'category_id', 
                'foreignField': '_id', 
                'as': 'category'
              }
              
            },
            {
              '$unwind':'$category'
            },

            {
              "$group":{
                  '_id':"$_id",
                  'eventName':{"$first":"$eventName"},
                  'date':{"$first":"$date"},
                  'priceSeat':{"$first":"$priceSeat"},
                  'description':{"$first":"$description"},
                  'image':{"$first":"$image"},
                  'location':{"$first":"$location"},
                  'categoryname':{"$first":"$category.categoryname"}
              }
          }


          ])
         
          if(event[0]!=undefined){
            return res.status(200).json({
                success:true,
                error:false,
                data:event
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

      addeventRouter.delete('/delete-events/:id', async (req, res) => {
        try {
          const eventid = req.params.id;
          const deletedevent = await addeventModel.findByIdAndDelete(eventid);
          if (deletedevent) {
            return res.status(200).json({
              success: true,
              error: false,
              message: 'Job category deleted successfully',
              data: deletedevent,
            });
          } else {
            return res.status(404).json({
              success: false,
              error: true,
              message: 'Job category not found',
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


      module.exports=addeventRouter

    