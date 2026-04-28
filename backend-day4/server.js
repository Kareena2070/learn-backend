const express = require('express');

const app = express();
app.use(express.json());

const userRouter = require('./routes/userRouter.js')

app.use('/users', userRouter)


app.listen(3000, ()=>{
    console.log("Server is running at port 3000")
})