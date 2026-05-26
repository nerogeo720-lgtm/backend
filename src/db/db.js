const mongoose = require("mongoose")



async function connectDB() {
    await mongoose.connect("mongodb+srv://project-yt:project123@project-yt.j9byh04.mongodb.net/hellay");
    console.log("Connected to DB")
}


module.exports = connectDB