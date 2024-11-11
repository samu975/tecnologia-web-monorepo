import { Router } from 'express';
import { validationResult } from 'express-validator';
import { ClientService } from '../services/Client.service.js';
import { validationCreateClient, validationUpdateClient } from '../validation/client.validation.js';

const clientController = Router();
const clientService = new ClientService();

// create client
clientController.post('/client', validationCreateClient(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const newClient = await clientService.createClient(req.body);
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// get all clients
clientController.get('/client', async (req, res) => {
  try {
    const clients = await clientService.getAllClients();
    res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// update client
clientController.put('/client/:id', validationUpdateClient(), async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  try {
    const updatedClient = await clientService.updateClient(req.params.id, req.body);
    if (!updatedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(200).json(updatedClient);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete client
clientController.delete('/client/:id', async (req, res) => {
  try {
    const deletedClient = await clientService.deleteClient(req.params.id);
    if (!deletedClient) {
      return res.status(404).json({ message: 'Client not found' });
    }
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default clientController;
