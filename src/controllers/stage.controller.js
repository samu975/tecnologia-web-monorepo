import { Router } from 'express';
import { validationResult } from 'express-validator';
import { StageService } from '../services/Stage.service.js';
import { validationCreateStage, validationUpdateStage } from '../validation/stage.validation.js';

const stageController = Router();
const stageService = new StageService();

// create a new stage
stageController.post('/stage', validationCreateStage(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newStage = await stageService.createStage(req.body);
    res.status(201).json(newStage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all stages
stageController.get('/stage', async (req, res) => {
  try {
    const stages = await stageService.getAllStages();
    res.status(200).json(stages);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update a stage
stageController.put('/stage/:id', validationUpdateStage(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const updatedStage = await stageService.updateStage(req.params.id, req.body);
    if (!updatedStage) {
      return res.status(404).json({ message: 'Stage not found' });
    }
    res.status(200).json(updatedStage);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a stage
stageController.delete('/stage/:id', async (req, res) => {
  try {
    const deletedStage = await stageService.deleteStage(req.params.id);
    if (!deletedStage) {
      return res.status(404).json({ message: 'Stage not found' });
    }
    res.status(200).json({ message: 'Stage deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default stageController;
