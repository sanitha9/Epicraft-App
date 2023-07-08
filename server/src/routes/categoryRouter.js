const express = require('express');
const categoryModel = require('../models/categoryModel');
const categoryRouter = express.Router()
categoryRouter.post('/category',async(req,res)=>{
    try{

        const data = {
          categoryname:req.body.categoryname
            
          }
          const savedData = await categoryModel(data).save();
      
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

      
      categoryRouter.get('/view-category', async (req, res) => {
        try {
          const categoryname = await categoryModel.find();
          if (categoryname.length > 0) {
            return res.status(200).json({
              success: true,
              error: false,
              data: categoryname
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



      categoryRouter.delete('/delete-category/:id', async (req, res) => {
        try {
          const eventid = req.params.id;
          const deletedevent = await categoryModel.findByIdAndDelete(eventid);
          if (deletedevent) {
            return res.status(200).json({
              success: true,
              error: false,
              message: 'category deleted successfully',
              data: deletedevent,
            });
          } else {
            return res.status(404).json({
              success: false,
              error: true,
              message: ' category not found',
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

      module.exports=categoryRouter

    