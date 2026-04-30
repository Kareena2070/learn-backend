const express = require('express');

const router = express.Router()

router.use((req, res, next)=>{
    console.log('User router middleware')
    next()
})

router.get('/profile', (req, res)=>{
    res.status(200).json({
        success: true,
        message: "User profile page"
    })

    // res.send("User profile page")
})

module.exports = router