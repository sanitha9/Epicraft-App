const express = require('express');
const chatModel = require('../models/chatModel');
const chatRouter = express.Router()
const { default: mongoose } = require('mongoose');

const Object = mongoose.Types.ObjectId

chatRouter.post('/chat', async (req, res) => {
  try {

    const data = {
      login_id: req.body.login_id,
      message: req.body.message,
      sender: req.body.sender,
      receiver: req.body.receiver,
      date: req.body.date,
      time: req.body.time,
      artistloginid: req.body.artistloginid,
      reply: null
    }
    const savedData = await chatModel(data).save();

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

chatRouter.get('/view-chat', async (req, res) => {
  try {
    const login_id = req.params.id
    const chat = await chatModel.find();
    if (chat.length > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        data: chat
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

chatRouter.get('/viewgroupusers/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const groupdeatils = await chatModel.find({ artistloginid: id });
    if (groupdeatils) {
      return res.status(200).json({
        success: true,
        error: false,
        data: groupdeatils,
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

chatRouter.put('/reply/:chat_id', async (req, res) => {
  try {
    const itemId = req.params.chat_id;
    const updatedQuantity = req.body.reply;

    const updatedCartItem = await chatModel.findByIdAndUpdate(
      itemId,
      { reply:updatedQuantity },
      { new: true }
    );

    if (updatedCartItem) {
      return res.status(200).json({
        success: true,
        error: false,
        message: 'Reply added successfully',
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: 'Reply not added',
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


// chatRouter.post('/users-chat', async (req, res) => {
//   try {

//     const data = {
//       login_id: req.body.login_id,
//       message: req.body.message,
//       sender: req.body.sender,
//       receiver: req.body.receiver,
//       date: req.body.date,
//       time: req.body.time,
//       artistloginid: req.body.artistloginid,
//       reply: null
//     }
//     const savedData = await chatModel(data).save();

//     if (savedData) {
//       return res.status(200).json({
//         success: true,
//         error: false,
//         message: "Data stored",
//         details: savedData
//       })
//     }
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       error: true,
//       message: "Something went wrong",
//       details: error
//     })
//   }
// })

chatRouter.get('/viewusers-chat', async (req, res) => {
  try {
    
    const id=req.params.id
    console.log(id);
      const description = await chatModel.aggregate([
          
        {
          '$lookup': {
            'from': 'user_register_tbs', 
            'localField': 'login_id', 
            'foreignField': 'login_id', 
            'as': 'result'
          }
        },
      


              { "$unwind": "$result" },
           
               {
                   "$group": {
                       '_id': "$_id",
                       'artistloginid': { "$first": "$artistloginid" },                        
                     
                      'message': { "$first": "$message" },
                       'name': { "$first": "$result.name"},
                      'login_id': { "$first": "$login_id" },
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

module.exports = chatRouter

