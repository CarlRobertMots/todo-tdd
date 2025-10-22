const mongoose = require("mongoose")

async function connect() {
    try {
        await mongoose.connect(
            "mongodb+srv://carlrobertmots_db_user:9haVxRcSv3dZU3Jl@cluster0.zqyh77u.mongodb.net/",
            { useNewUrlParser: true, useUnifiedTopology: true }
        );
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error("Error connecting to MongoDB");
        console.error(err);
    }
}

module.exports = { connect}