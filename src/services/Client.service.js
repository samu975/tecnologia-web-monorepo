import Client from '../models/Client.js';

export class ClientService {
  async createClient(clientData) {
    try {
      const newClient = new Client(clientData);
      await newClient.save();
      return newClient;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllClients() {
    try {
      const clients = await Client.find();
      return clients;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateClient(id, clientData) {
    try {
      const updatedClient = await Client.findByIdAndUpdate(id, clientData, { new: true });
      return updatedClient;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteClient(id) {
    try {
      const deletedClient = await Client.findByIdAndDelete(id);
      return deletedClient;
    } catch (error) {
      throw new Error(error);
    }
  }
}
