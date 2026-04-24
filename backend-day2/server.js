const express = require('express');

const app = express();
app.use(express.json())

app.get('/', (req, res)=>{
    res.send("Welcome to my server")
})

app.get("/about", (req, res) => {
    res.send("This is about page")
})

app.post('/contact', (req, res)=>{
    const user = req.body
    res.send(user, 'User details')
})


app.listen(3000, ()=>{
    console.log("Server is running on the port 3000")
})