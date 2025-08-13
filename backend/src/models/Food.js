import mongoose from 'mongoose';

const foodSchema = new mongoose.Schema({
  userID: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  time: { type: String, required: true },
  description: { type: String, required: true },
  date: { type: String, required: true }, // selected via datepicker
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now }
});

const Food = mongoose.model('Food', foodSchema);
export default Food;
