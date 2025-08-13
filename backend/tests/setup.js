import mongoose from 'mongoose';
import User from '../src/models/User.js';
import Food from '../src/models/Food.js';

beforeAll(async () => {
  await mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
});

beforeEach(async () => {
  await User.deleteMany({});
  await Food.deleteMany({});
});

afterAll(async () => {
  await mongoose.connection.close();
});
