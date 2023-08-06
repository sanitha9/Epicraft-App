const express = require('express');
const billingaddressModel = require('../models/billingaddressModel');
const cartModel=require('../models/cartModel');
const artItemsModel = require('../models/artItemsModel');
const { default: mongoose } = require('mongoose');

const billingaddressRouter = express.Router()
// billingaddressRouter.post('/billingaddress',async(req,res)=>{
//     try{

//         const data = {
//           login_id: req.body.login_id,
//             name: req.body.name,
//             email:req.body.email,
//             address:req.body.address,
//             city:req.body.city,
//             state:req.body.state,
//             zipcode:req.body.zipcode,
//             nameoncard:req.body.nameoncard,
//             creditcardnumb:req.body.creditcardnumb,
//             Expmonth:req.bodyExpmonth,
//             ExpYear:req.body.ExpYear,
//             cvv:req.body. cvv

//           }
//           const savedData = await billingaddressModel(data).save();
      
//           if (savedData) {
//             return res.status(200).json({
//               success: true,
//               error: false,
//               message: "Data stored",
//               details: savedData
//             })
//           }
//         } catch (error) {
//           return res.status(400).json({
//             success: false,
//             error: true,
//             message: "Something went wrong",
//             details: error
//           })
//         }
//       })

billingaddressRouter.get('/view-order/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const order = await billingaddressModel.findOne({ login_id:id});
    if (order) {
      return res.status(200).json({
        success: true,
        error: false,
        data: order,
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
billingaddressRouter.get('/admin-myorder/', async (req, res) => {
  try {
   
    const users = await billingaddressModel.aggregate([
      {
        '$lookup': {
          'from': 'artitems_tbs', 
          'localField': 'product_id', 
          'foreignField': '_id', 
          'as': 'result'
        }
      },
      {
        "$unwind": "$result"
      },
    
      {
        "$group": {
          '_id': "$_id",
          'name': { "$first": "$name" },
          'date': { "$first": "$date" },
          'order_id': { "$first": "$order_id" },
          'quantity': { "$first": "$quantity" },
          'status': { "$first": "$status" },
          'artname': { "$first": "$result.artname" },
          'price': { "$first": "$result.price" },
          'image': { "$first": "$result.image" },
          'login_id': { "$first": "$login_id" },
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
billingaddressRouter.get('/view-myorder/:id', async (req, res) => {
  try {
    const id=req.params.id;
    const users = await billingaddressModel.aggregate([
      {
        '$lookup': {
          'from': 'artitems_tbs', 
          'localField': 'product_id', 
          'foreignField': '_id', 
          'as': 'result'
        }
      },
      {
        "$unwind": "$result"
      },
      {
        $match:{'login_id':new mongoose.Types.ObjectId(id)},
      },
      {
        "$group": {
          '_id': "$_id",
          'name': { "$first": "$name" },
          'date': { "$first": "$date" },
          'order_id': { "$first": "$order_id" },
          'quantity': { "$first": "$quantity" },
          'artname': { "$first": "$result.artname" },
          'price': { "$first": "$result.price" },
          'image': { "$first": "$result.image" },
          'login_id': { "$first": "$login_id" },
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

billingaddressRouter.get('/track-order/:id', async (req, res) => {
  try {
    const id=req.params.id;
    const users = await billingaddressModel.aggregate([
      {
        '$lookup': {
          'from': 'artitems_tbs', 
          'localField': 'product_id', 
          'foreignField': '_id', 
          'as': 'result'
        }
      },
      {
        "$unwind": "$result"
      },
      {
        $match:{'order_id':new mongoose.Types.ObjectId(id)},
      },
      {
        "$group": {
          '_id': "$_id",
          'name': { "$first": "$date" },
          'order_id': { "$first": "$order_id" },
          'quantity': { "$first": "$quantity" },
          'artname': { "$first": "$result.artname" },
          'price': { "$first": "$result.price" },
          'status': { "$first": "$status" },
          'image': { "$first": "$result.image" },
          'login_id': { "$first": "$login_id" },
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
billingaddressRouter.get('/view-details/:trackingNumber', async (req, res) => {
  try {
    const trackingNumber = req.params.trackingNumber;

    const order = await billingaddressModel.aggregate([
      {
        $match: { order_id: trackingNumber }, 
      },
      {
        '$lookup': {
          'from': 'artitems_tbs', 
          'localField': 'product_id', 
          'foreignField': '_id', 
          'as': 'result'
        }
      },
      {
        $unwind: '$result',
      },
      {
        $project: {
          _id: 1,
          date: 1,
          order_id: 1,
          medicinequantity: 1,
          totalAmount: 1,
          address: 1,
          status: 1,
          artname: '$result.artname',
          price: '$result.price',
        },
      },
    ]);

    if (order.length > 0) {
      res.status(200).json({ success: true, data: order[0] }); 
    } else {
      res.status(404).json({ success: false, message: 'Order not found' });
    }
  } catch (err) {
    res.status(500).json({ success: false, message: 'Error fetching order details' });
    console.error(err);
  }
});
billingaddressRouter.post('/save-order/:id', async (req, res) => {
  
  try {
    const id = req.params.id;
    console.log(id);
    const carts = await cartModel.find({ login_id: id });
    console.log(carts);

    carts.forEach((item) => {
      item.price = item.price * item.quantity;
    });

    let totalAmount = 0;
  
    for (let i = 0; i < carts.length; i++) {
      totalAmount += carts[i].price;
    }  

    const datas = [];
    const date = new Date();
    const formattedDate = date.toISOString().split('T')[0];
    for (let i = 0; i < carts.length; i++) {
      const orderId = generateRandomNumberString(8);
      const orderData = new billingaddressModel({
        product_id: carts[i].product_id,
        login_id: carts[i].login_id,
        price: carts[i].price,
        name:req.body.name,
        email:req.body.email,
        address:req.body.address,
        city:req.body.city,
        state:req.body.state,
        zipcode:req.body.zipcode,
        nameoncard:req.body.nameoncard,
        creditcardnumb:req.body.creditcardnumb,
        Expmonth:req.body.Expmonth,
        ExpYear:req.body.ExpYear,
        cvv:req.body.cvv,
        order_id: orderId,
        quantity: carts[i].quantity,
        time: req.body.time,
        date: formattedDate,
        totalAmount:totalAmount,
        status:'processing',
      });

      datas.push(await orderData.save());
    }

    const cart_data = await cartModel.deleteMany({ login_id: id });

    res.status(201).json({
      success: true,
      error: false,
      message: 'Order completed',
    });
  } catch (err) {
    res.status(500).json({ success: false, error: true, message: 'Something Went Wrong' });
    console.log(err);
  }
});

const generateRandomNumberString = (length) => {
  const numbers = '0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    result += numbers[randomIndex];
  }
  return result;
};

billingaddressRouter.post('/update-order-status/:id', async (req, res) => {


  
  try {
    const id = req.params.id;

    const updatedData = { 
      status: 'Shipped',
    };

    const updatedApplication = await billingaddressModel.updateOne({ order_id: id }, { $set: updatedData });

    if (updatedApplication.nModified > 0) {
      return res.status(200).json({
        success: true,
        error: false,
        message: "Status updated successfully",
        details: updatedApplication,
      });
    } else {
      return res.status(404).json({
        success: false,
        error: true,
        message: "Status not found",
      });
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Something went wrong",
      details: error,
    });
  }
});





      module.exports=billingaddressRouter
    