const express = require('express');

const app = express();

// custom middlewatre
app.use((req, res, next)=>{
    console.log("Here is middleware");
    next()
})


// create Route
app.use((req, res)=>{
    res.send('Servering is runing kareena ')
})

// create the Server

app.listen(3000, ()=>{
    console.log("Server is running on the port 3000")
})