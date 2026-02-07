
const app = require("./src/app")
const connectDB = require("./src/db/db")

connectDB()  // connect to the database before starting the server

app.listen(3000, ()=>{
    console.log("server is running on port 3000")
})