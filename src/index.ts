import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { router } from './routes/dogs';

dotenv.config();

const app = express();
const port = Number(process.env.PORT) || 3333;

app.use(cors());
app.use(express.json());
app.use('/', router);

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
