const express = require('express')
const mongoose = require('mongoose')
const loginRouter = require('./src/routes/loginRouter')
const UserRegRouter = require('./src/routes/UserRegRouter')
const bodyParser = require('body-parser')
const artItemsRouter = require('./src/routes/artItemsRouter')
const categoryRouter = require('./src/routes/categoryRouter')
const groupRouter = require('./src/routes/groupRouter')
// const billingaddressRouter = require('./src/routes/billingaddressRouter')
// const reserveRouter = require('./src/routes/reserveRouter')
const addeventRouter = require('./src/routes/addeventRounter')
// const cartRouter = require('./src/routes/cartRouter')
// const reviewRouter = require('./src/routes/reviewRouter')
const customizerequestRouter = require('./src/routes/customizerequestRouter')
// const notificationRouter = require('./src/routes/notificationRouter')
// const customizerequestRouter = require('./src/models/customizerequestRouter')

const app = express()
app.use(bodyParser())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader( 
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });

app.use('/login',loginRouter)
app.use('/register',UserRegRouter)
app.use('/artitems',artItemsRouter)
app.use('/category',categoryRouter)
app.use('/group',groupRouter)
// app.use('/pay',billingaddressRouter)
// app.use('/reserve',reserveRouter)
app.use('/exhibition',addeventRouter)
// app.use('/cart',cartRouter)
// app.use('/review',reviewRouter)
// app.use('/customize',customizerequestRouter)
// app.use('/notification',notificationRouter)
app.use('/customize',customizerequestRouter)
const mongoDBurl = 'mongodb+srv://sanisandhya7:sanisandhya7@cluster0.ewqotzq.mongodb.net/epicraft?retryWrites=true&w=majority'
mongoose.connect(mongoDBurl).then(() => {
    app.listen(5000, () => {
        console.log("server started ");
    })
}).catch((error) => {
    console.log(error);
})