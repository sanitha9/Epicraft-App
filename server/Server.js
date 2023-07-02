const express = require('express')
const mongoose = require('mongoose')
const loginRouter = require('./src/routes/loginRouter')
const UserRegistrationRouter = require('./src/routes/UserRegRouter')
const bodyParser = require('body-parser')
const artItemsRouter = require('./src/routes/artItemsRouter')
const categoryRouter = require('./src/routes/categoryRouter')

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

app.use('/login', loginRouter)
app.use('/register', UserRegistrationRouter)
app.use('/register',artItemsRouter)
app.use('/register',categoryRouter)
const mongoDBurl = 'mongodb+srv://sanisandhya7:sanisandhya7@cluster0.ewqotzq.mongodb.net/epicraft?retryWrites=true&w=majority'
mongoose.connect(mongoDBurl).then(() => {
    app.listen(5000, () => {
        console.log("server started ");
    })
}).catch((error) => {
    console.log(error);
})