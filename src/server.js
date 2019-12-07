const path = require('path');
const express = require('express');

const app = express();
// Port for Heroku and if local, uses local port
const port = process.env.PORT || 3000;

// That to public folder to access client side files
const publicDirectoryPath = path.join(__dirname, "../public");

// Setup static directory to server
app.use(express.static(publicDirectoryPath));

// Catch all undefined routes to index.html
app.get('*', (req, res) => {
    res.redirect('/')
})

// Listener for port
app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
})