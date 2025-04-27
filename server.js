const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;


const userRoutes = require('./routes/userRoutes');
const jobApplicationRoutes = require('./routes/jobApplicationRoutes');

app.use('/api/users', userRoutes);
app.use('/api/applications', jobApplicationRoutes);

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

// Routes
app.get('/', (req, res) => {
  res.send('Job Application Tracker API');
});

// Start Server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));