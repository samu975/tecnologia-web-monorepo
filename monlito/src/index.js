import express from 'express';
import { getConnectionMongoDB } from './db/db-conection.js';
import cors from 'cors';
import * as dotenv from 'dotenv';
dotenv.config();

// import controllers
import projectController from './controllers/project.controller.js';
import projectTypeController from './controllers/projectType.controller.js';
import clientController from './controllers/client.controller.js';
import universityController from './controllers/university.controller.js';
import stageController from './controllers/stage.controller.js';


await getConnectionMongoDB();
const app = express();
const PORT = 4000;

app.use(express.json());
app.use(cors());
app.use('/api', projectController);
app.use('/api', projectTypeController);
app.use('/api', clientController);
app.use('/api', universityController);
app.use('/api', stageController);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
