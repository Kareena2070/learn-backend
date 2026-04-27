const express = require('express');

const app = express();
app.use(express.json())

// only written when you just write basic Server, when you using the http method does not have to write this
// app.use("/", (req, res)=>{
//     res.send("Server is running")
// })

app.get('/users', (req, res)=>{
    res.status(200).json({
        success: true,
        message: "List of students"
    })
})

app.post("/profile", (req, res)=>{
    const user = req.body
    res.status(201).json({
        success: true,
        message: "Created a new user"
    })
})

app.put('/profile/:id', (req, res)=>{
    // const id = req.params.id;
    // // res.send(`user ${id} is updated`)
    // if(id in user){
    //     res.status(200).json({
    //         success: true,
    //         message : `user ${id} updated`
    //     })
    // }else{
    //     res.status(404).json({
    //         success: false,
    //         message: 'Id is not found'
    //     })
    // }

    try {
        const id = req.params.id;
        const userExcits = true;
        if (userExcits){
            return res.status(200).json({
                success: true,
                message: `user ${id} updated`
            })
        }else{
            return res.status(404).json({
                success: false,
                message : `user ${id} not found`
            })
        }
    } catch(err){
        return res.status(500).json({
            success: false,
            message : "Internal server error"
        })
    }

})

app.delete("/profile/:id", (req, res)=>{
    const id = req.params.id;
    res.status(200).json({
        success: true,
        message: `user ${id} is deleted`
    })
})

app.listen(3000, ()=>{
    console.log('Server is running at 3000 port')
})