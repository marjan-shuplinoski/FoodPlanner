dotenv.config();
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db.js';
import authRoutes from './routes/auth.js';
import foodRoutes from './routes/food.js';
import errorHandler from './middleware/errorHandler.js';

dotenv.config();
connectDB();


const app = express();
const allowedOrigins = [
  process.env.CORS_ORIGIN,
  'http://localhost:5173',
  'http://192.168.0.106:5173'
];
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.some(o => origin && origin.startsWith(o))) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/food', foodRoutes);

// Error handling middleware (should be last)
app.use(errorHandler);


const PORT = process.env.PORT || 5000;
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
