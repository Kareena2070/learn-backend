const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://kareenayadav24_db_user:Manish1088@cluster0.trbkn6m.mongodb.net/Todo-list?appName=Cluster0");
        console.log("MongoDB connected");
    } catch (error) {
        console.log("DB connection error:", error);
        process.exit(1);
    }
};

module.exports = connectDB;