const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const controller = require('./controllers/menuController');

// Load environment variables
dotenv.config();

// Connect to database
connectDB();
//controller.getMenuItems(null, null);

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/menu', require('./routes/menuRoutes'));

// Basic route
app.get('/', (req, res) => {
  res.send('API is running... mim');
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});