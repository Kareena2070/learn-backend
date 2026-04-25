const express = require("express");

const app = express();
// middleware to call the json
app.use(express.json())

// custom middleware
app.use((req, res, next)=>{
    console.log("middleware is running")
    next()
})
  

app.post('/student', (req, res)=>{
    const student = req.body;
    res.json({
        message: "Successfully added student",
        student
    })
})

app.get('/', (req, res)=>{
    const users = [
        {
            id : 1,
            name: "Kareena",
            age : 20
        },
        {
            id: 2,
            name: "Suhana",
            age: 20
        },
        {
            id: 3,
            name: "Amisha",
            age: 20
        }
    ]

    res.json({
        message: "list of student",
        users
    })
})

app.put('/student/:id', (req, res)=>{
    const user = req.params.id
    res.json({
        message: `updated user ${user}`,
        user
    })
})

app.delete('/student/:id', (req, res)=>{
    const user = req.params.id;
    res.json({
        message: `user ${user} is deleted`,
        user
    })
})

app.get('/about', (req, res)=>{
    res.send("welcome to about page")
})

app.get('/contact', (req, res)=>{
    const contact = [
        {
        "email": "admin@gmail.com",
        "phone": "9876543210"
        }
    ]
    res.json({
        message: "Successfully contact showing",
        contact
    })
})


app.listen(3000, ()=>{
    console.log("Server is running on port 3000")
})