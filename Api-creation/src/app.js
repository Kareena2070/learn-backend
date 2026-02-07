// Sever create

const express = require("express")

const app = express()
app.use(express.json())

const notes = []

app.post('/notes', (req, res) => {
    // console.log(req.body)    

    notes.push(req.body)
    res.status(201).json({
        message: "Note created successfully",
    })
})

app.get('/notes', (req, res) => {
    res.status(200).json({
        message: "Notes retrieved successfully",
        data: notes
    })
})

// delete/:index  -> : give the dynamic value of index and we can access it by req.params.index

app.delete('/notes/:index', (req, res) => {
    const index = req.params.index
    delete notes[index]

    res.status(200).json({
        message: "note delete successfully"
    })
})

app.patch("/notes/:index", (req, res)=>{
    const   index = req.params.index
    const description = req.body.description

    notes[index].description = description

    res.status(200).json({
        message: "note update successfully"
    })
})


module.exports = app