const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors());
// app.use(express.json());

// ✅ Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api/about', require('./Routes/aboutRoutes'));
app.use('/api/projects', require('./Routes/projectRoutes'));
app.use('/api/resume', require('./Routes/resumeRoutes'));
app.use('/api/contact', require('./Routes/contactRoutes'));

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
