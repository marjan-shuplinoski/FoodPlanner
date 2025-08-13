import Food from '../models/Food.js';

export const createFood = async (req, res) => {
  try {
    const { time, description, date } = req.body;
    const food = new Food({
      userID: req.user.id,
      time,
      description,
      date
    });
    await food.save();
    res.status(201).json(food);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getFoods = async (req, res) => {
  try {
    const foods = await Food.find({ userID: req.user.id });
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const getFoodsByDate = async (req, res) => {
  try {
    const foods = await Food.find({ userID: req.user.id, date: req.params.date });
    res.json(foods);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const updateFood = async (req, res) => {
  try {
    const food = await Food.findOneAndUpdate(
      { _id: req.params.id, userID: req.user.id },
      req.body,
      { new: true }
    );
    if (!food) return res.status(404).json({ error: 'Food entry not found' });
    res.json(food);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};

export const deleteFood = async (req, res) => {
  try {
    const food = await Food.findOneAndDelete({ _id: req.params.id, userID: req.user.id });
    if (!food) return res.status(404).json({ error: 'Food entry not found' });
    res.json({ message: 'Food entry deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
};
