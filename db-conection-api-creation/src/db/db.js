const mongoose = require("mongoose")  // import mongoose to connect to the database to the server


async function connectDB(){
    await mongoose.connect("mongodb+srv://kareena:kareena1088@yt-backend.bkdoj36.mongodb.net/one?appName=yt-backend")
    console.log("connected to database")
}

module.exports = connectDB