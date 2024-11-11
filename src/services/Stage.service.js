import Stage from '../models/Stage.js';

export class StageService {
  async createStage(stageData) {
    try {
      const newStage = new Stage(stageData);
      await newStage.save();
      return newStage;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllStages() {
    try {
      const stages = await Stage.find();
      return stages;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateStage(id, stageData) {
    try {
      const updatedStage = await Stage.findByIdAndUpdate(id, stageData, { new: true });
      return updatedStage;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteStage(id) {
    try {
      await Stage.findByIdAndDelete(id);
      return true;
    } catch (error) {
      throw new Error(error);
    }
  }
}
