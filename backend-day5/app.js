const express = require('express');

const app = express();

app.use((req, res, next)=>{
    console.log("App middleware running")
    next()
})

const userRouter = require('./src/routes/userRoutes.js')

app.use('/user', userRouter)


module.exports = app;