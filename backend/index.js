require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/database');
const contactRoutes = require('./routes/contactRoutes');

const app = express();

connectDB();

app.use(cors());
app.use(express.json());

// Welcome route
app.get('/', (req, res) => {
  res.json({ message: "Welcome to the Portfolio API" });
});

app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
