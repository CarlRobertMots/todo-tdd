const express = require('express');
const todoRoutes = require("./routes/todo.routes")
const app = express();
const mongodb = require("./mongodb/mongodb.connect")

mongodb.connect();

Port = process.env.PORT || 3015;
app.use(express.json())

app.use("/todos", todoRoutes)

app.use((error, req, res, next) => {
    res.status(500).json({ message: error.message})
})

app.get('/', (req, res) => {
    res.send('Starting point' );
} );

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
} );

module.exports = app