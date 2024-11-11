import { Router } from 'express';
import { validationResult } from 'express-validator';
import { ProjectTypeService } from '../services/ProyectType.service.js';
import { validationCreateProjectType, validationUpdateProjectType } from '../validation/projectType.validation.js';

const projectTypeController = Router();
const projectTypeService = new ProjectTypeService();

// create project type
projectTypeController.post('/project-type', validationCreateProjectType(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newProjectType = await projectTypeService.createProjectType(req.body);
    res.status(201).json(newProjectType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all projects types
projectTypeController.get('/project-type', async (req, res) => {
  try {
    const projectTypes = await projectTypeService.getAllProjectTypes();
    res.status(200).json(projectTypes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update project type
projectTypeController.put('/project-type/:id', validationUpdateProjectType(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const updatedProjectType = await projectTypeService.updateProjectType(req.params.id, req.body);
    if (!updatedProjectType) {
      return res.status(404).json({ message: 'Project type not found' });
    }
    res.status(200).json(updatedProjectType);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete project type
projectTypeController.delete('/project-type/:id', async (req, res) => {
  try {
    await projectTypeService.deleteProjectType(req.params.id);
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default projectTypeController;
