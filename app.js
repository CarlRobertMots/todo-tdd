const express = require('express');
const app = express();

Port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Starting point' );
} );

app.listen(Port, () => {
    console.log(`Server is running on port ${Port}`);
} );