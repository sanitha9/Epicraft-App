const express = require('express')
const userRegisterModel = require('../models/userRegisterModel')
const loginModel = require('../models/loginModel')
const artistRegisterModel = require('../models/artistRegisterModel')
const { default: mongoose } = require('mongoose')

const objectid = mongoose.Types.ObjectId
const UserRegRouter = express.Router()
UserRegRouter.get('/approve/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const approve = await loginModel.updateOne({ _id: id }, { $set: { status: 1 } });

    if (approve && approve.modifiedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'User approved',
      });
    } else if (approve && approve.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already approved',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});

UserRegRouter.get('/joingroup/:id/:groupid', async (req, res) => {
  try {
    const id = req.params.id;
    
    const oldUser = await userRegisterModel.findOne({ _id: id })
    console.log(oldUser);
    if (oldUser.group != null ) {
     // const flag =1;
      return res.status(406).json({
        sucess: false,
        error: true,
        message: "Already joined in a group"
        
      })
    }
   const groupid = req.params.groupid;
    const approve = await userRegisterModel.updateOne({ _id: id }, { $set: { group:  groupid,groupstatus:'0'} });

    if (approve && approve.modifiedCount === 1 ) {
      return res.status(200).json({ 
        success: true,
        message: 'joined group',
      });
    } else if (approve && approve.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already joined',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});










UserRegRouter.get('/exitgroup/:id', async (req, res) => {
  try {
    const id = req.params.id;
    console.log(id);
    const oldUser = await userRegisterModel.findOne({ _id: id })
    console.log(oldUser);
   
    

   // const id = req.params.id;
    
  
    const approve = await userRegisterModel.updateMany({ _id: id }, { $set: { group:  null} });

    if (approve && approve.modifiedCount === 1 ) {
      return res.status(200).json({ 
        success: true,
        message: 'exit group',
      });
    } else if (approve && approve.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already joined',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});



UserRegRouter.get('/userdeatils/:id', async (req, res) => {
  try {
    const id = req.params.id;
    
    const Userdeails = await userRegisterModel.findOne({ _id: id })
    if (Userdeails) {
      return res.status(200).json({
        success: true,
        error: false,
        data: Userdeails, // Corrected 'medicine' to 'Userdeails'
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


UserRegRouter.get('/groupuserdeatils/:id', async (req, res) => {
  try {
    const id = req.params.id;
    
    const Userdeails = await userRegisterModel.find({ group: id })
    if (Userdeails) {
      return res.status(200).json({
        success: true,
        error: false,
        data: Userdeails, // Corrected 'medicine' to 'Userdeails'
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
UserRegRouter.get('/approveuseringroup/:id', async (req, res) => {
  try {
    const id = req.params.id;
console.log(id);
    const approve = await userRegisterModel.updateMany({_id: id }, { $set: { groupstatus: '1' } });
console.log(approve);
    if (approve && approve.modifiedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'group approved',
      });
    } else if (approve && approve.modifiedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'group not found or already approved',
      });
    } else {
      throw new Error('Error updating user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});


UserRegRouter.get('/rejectuseringroup/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const reject = await userRegisterModel.deleteOne({ _id: id });

    if (reject && reject.deletedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'user rejected',
      });
    } else if (reject && reject.deletedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'user not found or already rejected',
      });
    } else {
      throw new Error('Error deleting group');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});




// UserRegRouter.get('/joingroup/:id/:groupid', async (req, res) => {
//   try {
//     const id = req.params.id;
//     const groupid = req.params.groupid;

//     const existingUser = await userRegisterModel.findOne({ _id: id });
    
//     if (existingUser.group !== null) {
//       return res.status(406).json({
//         success: false,
//         error: true,
//         message: "Already joined a group",
//       });
//     }

//     // Check if the user is already part of the requested group
//     if (existingUser.group === groupid) {
//       return res.status(406).json({
//         success: false,
//         error: true,
//         message: "Already joined in this group",
//       });
//     }

//     const updatedUser = await userRegisterModel.updateOne(
//       { _id: id, group: null }, // Make sure the user hasn't joined any group yet
//       { $set: { group: groupid } }
//     );

//     if (updatedUser.nModified === 1) {
//       return res.status(200).json({
//         success: true,
//         message: 'Joined group',
//       });
//     } else {
//       return res.status(400).json({
//         success: false,
//         message: 'User not found or already joined',
//       });
//     }
//   } catch (error) {
//     return res.status(400).json({
//       success: false,
//       message: 'Something went wrong',
//       details: error.message,
//     });
//   }
// });

UserRegRouter.get('/reject/:id', async (req, res) => {
  try {
    const id = req.params.id;

    const reject = await loginModel.deleteOne({ _id: id });

    if (reject && reject.deletedCount === 1) {
      return res.status(200).json({
        success: true,
        message: 'User rejected',
      });
    } else if (reject && reject.deletedCount === 0) {
      return res.status(400).json({
        success: false,
        message: 'User not found or already rejected',
      });
    } else {
      throw new Error('Error deleting user');
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: 'Something went wrong',
      details: error.message,
    });
  }
});

UserRegRouter.get('/view-user', async (req, res) => {
  try {
    const users = await userRegisterModel.aggregate([
      {


        '$lookup': {
          'from': 'login_tbs',
          'localField': 'login_id',
          'foreignField': '_id',
          'as': 'login'
        }
      },
      {
        "$unwind": "$login"
      },
      {
        "$group": {
          '_id': "$_id",
          'name': { "$first": "$name" },
          'email': { "$first": "$email" },
          'mobile': { "$first": "$mobile" },
          'status': { "$first": "$login.status" },
          'login_id': { "$first": "$login._id" },
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
UserRegRouter.get('/view-single-user/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const medicine = await userRegisterModel.findOne({ _id: id });
    if (medicine) {
      return res.status(200).json({
        success: true,
        error: false,
        data: medicine,
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
UserRegRouter.get('/view-artist/:id', async (req, res) => {
  try {
    const login_id= req.params.id; 
    const artist = await artistRegisterModel.aggregate([
      {
        '$lookup': {
          'from': 'login_tbs',
          'localField': 'login_id',
          'foreignField': '_id',
          'as': 'login'
        }
      },

      {
        "$unwind": "$login"
      },
      {

        '$match': { 'login._id': new objectid (login_id),
       
      }
    },
      {
        "$group": {
          '_id': "$_id",
          'name': { "$first": "$name" },
          'email': { "$first": "$email" },
          'mobile': { "$first": "$mobile" },
          'category': { "$first": "$category" },
          'status': { "$first": "$login.status" },
          'login_id': { "$first": "$login._id" },
        }
      }
    ])




    if (artist[0] != undefined) {
      return res.status(200).json({
        success: true,
        error: false,
        data: artist
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
UserRegRouter.post('/userReg', async (req, res) => {
  try {
    const oldUser = await loginModel.findOne({ username: req.body.username })
    if (oldUser) {
      return res.status(406).json({
        sucess: false,
        error: true,
        message: "Username already exists"
      })
    }
    const oldEmail = await userRegisterModel.findOne({ email: req.body.email })
    if (oldEmail) {
      return res.status(406).json({
        sucess: false,
        error: true,
        message: "Email already exists"
      })
    }
    const login_data = {
      username: req.body.username,
      password: req.body.password,
      status: 0,
      role: 1
    }
    const save_login = await loginModel(login_data).save()
    if (save_login) {
      const register_data = {
        login_id: save_login._id,
        name: req.body.name,
        dob: req.body.dob,
        address: req.body.address,
        gender: req.body.gender,
        mobile: req.body.mob,
        email: req.body.email,
        group: null,
      }
      const save_register = await userRegisterModel(register_data).save()
      if (save_register) {
        return res.status(201).json({
          sucess: true,
          error: false,
          message: "Registration completed",
          deatils: save_register
        })
      }
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Somethong went wrong",
      details: error
    })
  }
})

UserRegRouter.post('/artistReg', async (req, res) => {
  try {
    const oldUser = await loginModel.findOne({ username: req.body.username })
    if (oldUser) {
      return res.status(406).json({
        sucess: false,
        error: true,
        message: "Username already exists"
      })
    }
    const oldEmail = await artistRegisterModel.findOne({ email: req.body.email })
    if (oldEmail) {
      return res.status(406).json({
        sucess: false,
        error: true,
        message: "Email already exists"
      })
    }
    const login_data = {
      username: req.body.username,
      password: req.body.password,
      status: 0,
      role: 2
    }
    const save_login = await loginModel(login_data).save()
    if (save_login) {
      const register_data = {
        login_id: save_login._id,
        name: req.body.name,
        dob: req.body.dob,
        address: req.body.address,
        gender: req.body.gender,
        mobile: req.body.mob,
        category: req.body.category,
        email: req.body.email
      }
      const save_register = await artistRegisterModel(register_data).save()
      if (save_register) {
        return res.status(201).json({
          sucess: true,
          error: false,
          message: "Registration completed",
          deatils: save_register
        })
      }
    }
  } catch (error) {
    return res.status(400).json({
      success: false,
      error: true,
      message: "Somethong went wrong",
      details: error
    })
  }
})



UserRegRouter.get('/view-chatusers/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const medicine = await userRegisterModel.findOne({ login_id: id });
    if (medicine) {
      return res.status(200).json({
        success: true,
        error: false,
        data: medicine,
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












module.exports = UserRegRouter
