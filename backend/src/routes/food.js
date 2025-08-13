
import express from 'express';
import auth from '../middleware/auth.js';
import {
  createFood,
  getFoods,
  getFoodsByDate,
  updateFood,
  deleteFood
} from '../controllers/foodController.js';

const router = express.Router();

router.post('/', auth, createFood);
router.get('/', auth, getFoods);
router.get('/date/:date', auth, getFoodsByDate);
router.put('/:id', auth, updateFood);
router.delete('/:id', auth, deleteFood);

export default router;
