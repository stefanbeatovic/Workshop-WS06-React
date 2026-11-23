const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const postsRouter = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = (process.env.FRONTEND_ORIGIN || '')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

async function connectToDatabase() {
  if (!process.env.MONGODB_URI) {
    console.warn('MONGODB_URI is missing. Create a .env file in backend/ before testing database features.');
    return false;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, { dbName: 'blog' });
    console.log('Connected to MongoDB');
    return true;
  } catch (error) {
    console.log(`MongoDB connection error: ${error.message}`);
    return false;
  }
}

app.use(express.json());
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('CORS blocked for this origin'));
  },
}));
app.use(cors({
  origin(origin, callback) {
    if (!origin || allowedOrigins.length === 0 || allowedOrigins.includes(origin)) {
      callback(null, true);
      return;
    }

    callback(new Error('CORS blocked for this origin'));
  },
}));
app.use('/api/posts', postsRouter);

app.use((req, res) => {
  return res.status(404).json({ error: 'Route not found' });
});

app.use((error, req, res, next) => {
  console.error(error.stack);
  return res.status(500).json({ error: 'Server error' });
});

connectToDatabase().then((connected) => {
  if (!connected) return;

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log('Mounted routers:');
    console.log('  /api/posts -> routes/posts.js');
  });
});
