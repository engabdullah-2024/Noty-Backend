const express = require('express');
const cors = require('cors');
const noteRouter = require('./routes/NoteRouter'); // Assuming you have a NoteRouter.js file
const mongoose = require('mongoose');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON bodies

// Routes
app.use(noteRouter, );

// Connect to MongoDB
mongoose.connect("mongodb://localhost:27017/NotyApp").then(() =>{
    console.log("Data has been connected successfully")
}).catch((error)=>{
    console.log(error)
})

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// Fallback route for undefined routes
app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});
