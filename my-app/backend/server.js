// backend/server.js
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // allow frontend to connect
const userRoutes = require('./routes'); // your existing routes

const app = express();

// --- MIDDLEWARE ---
app.use(cors()); // enable cross-origin requests
app.use(express.json()); // parse JSON bodies

// --- TEST ROUTE ---
// This is a simple route to verify backend is reachable
app.get('/api/data', (req, res) => {
  res.json({ message: 'Backend is working!' });
});

// --- USER ROUTES ---
app.use('/api', userRoutes);

// --- ROOT ROUTE ---
app.get('/', (req, res) => {
  res.send('Server is Up and Running!');
});

// --- DATABASE CONNECTION ---
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/my_app_db';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URI)
  .then(() => {
    console.log('✅ Connected to MongoDB Successfully');
    app.listen(PORT, () => {
      console.log(`🚀 Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB Connection Error:', err.message);
  });