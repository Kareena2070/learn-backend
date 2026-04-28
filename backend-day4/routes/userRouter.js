const express = require('express');

const router = express.Router();

router.get('/', (req, res)=>{
    res.status(200).json({
        success: true,
        message: "List of student"
    })
})

router.post('/', (req, res)=>{
    const user = req.body
    res.status(201).json({
        success: true,
        message: "Created user account"
    })
})

router.put("/:id", (req, res)=>{
    const id = req.params.id
    res.status(200).json({
        success: true,
        message: `Updated user ${id}`
    })
})

router.delete('/:id', (req, res)=>{
    const id = req.params.id
    res.status(200).json({
        success: true,
        message: `${id} user is deleted`
    })
})

module.exports = router