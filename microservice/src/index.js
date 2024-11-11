import express from 'express';
import { getConnectionMongoDB } from './db/db-conection.js';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

// import controllers
import projectController from './controllers/project.controller.js';


await getConnectionMongoDB();
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());
app.use('/api', projectController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
