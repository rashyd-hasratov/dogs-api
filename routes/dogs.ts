import express, {Request, Response} from 'express';

import {
  ping,
  getDogs,
  addDog,
} from '../controllers/dogs';

export const router = express.Router();

router.get('/ping', ping);
router.get('/dogs', getDogs);
router.post('/dog', addDog);