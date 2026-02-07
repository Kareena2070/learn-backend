const express = require('express');
const noteModel = require('./models/note.module');

const app = express();
app.use(express.json())  // to parse the request body and to use this data we have to use express.json() middleware in app.js file

app.post('/notes', async (req, res) => {
    const data = req.body         //{title, despcrition} and to use this data we have to use express.json() middleware in app.js file

    await noteModel.create({
        title: data.title,
        description: data.description
    })  

    res.status(201).json({
        message: "Note created successfully",
    })
})

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find()  // to find all the notes in the database and to use this data we have to use express.json() middleware and it alway returns an array of objects

    // const oneNote = await noteModel.findOne({
    //     title: "First Note"    // if this data is present in the database then it will return the object otherwise it will return null
    // })  // to find one note in the database and to use this data we have to use express.json() middleware and it alway returns an object

    res.status(200).json({
        message: "Notes fetched successfully",
        data: notes
    })
})

app.delete('/notes/:id', async (req, res) => {
    const noteId = req.params.id;  // to get the id from the request parameters

    await noteModel.findOneAndDelete({
        _id: noteId
    })

    res.status(200).json({
        message: "Note deleted successfully",
    })
})

app.patch('/notes/:id', async (req, res)=>{
    const noteId = req.params.id;  // to get the id from the request parameters
    const title = req.body.title;  // to get the description from the request body and to use this data we have to use express.json() middleware in app.js file

    await noteModel.findOneAndUpdate({   _id: noteId}, {title: title}) // findOneAndUpadate used two objects one to find and another to update the data

    res.status(200).json({
        message: "Note updated successfully",
    })
})


module.exports = app;
