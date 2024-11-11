import { Router } from 'express';
import { validationResult } from 'express-validator';
import { UniversityService } from '../services/University.service.js';
import { validationCreateUniversity, validationUpdateUniversity } from '../validation/university.validation.js';

const universityController = Router();
const universityService = new UniversityService();

// create university
universityController.post('/university', validationCreateUniversity(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newUniversity = await universityService.createUniversity(req.body);
    res.status(201).json(newUniversity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all universities
universityController.get('/university', async (req, res) => {
  try {
    const universities = await universityService.getAllUniversities();
    res.status(200).json(universities);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//update university
universityController.put('/university/:id', validationUpdateUniversity(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const updatedUniversity = await universityService.updateUniversity(req.params.id, req.body);
    if (!updatedUniversity) {
      return res.status(404).json({ message: 'University not found' });
    }
    res.status(200).json(updatedUniversity);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete university
universityController.delete('/university/:id', async (req, res) => {
  try {
    await universityService.deleteUniversity(req.params.id);
    res.status(204).end();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default universityController;
