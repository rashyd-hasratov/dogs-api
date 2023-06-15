import express from 'express';

import {
  ping,
  getDogs,
  createDog,
} from '../controllers/dogs';

export const router = express.Router();

router.get('/ping', ping);
router.get('/dogs', getDogs);
router.post('/dog', createDog);
