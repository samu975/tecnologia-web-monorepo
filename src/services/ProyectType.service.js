// services/ProjectType.service.js
import ProjectType from '../models/ProjectType.js';

export class ProjectTypeService {
  async createProjectType(projectTypeData) {
    try {
      const newProjectType = new ProjectType(projectTypeData);
      await newProjectType.save();
      return newProjectType;
    } catch (error) {
      throw new Error(error);
    }
  }

  async getAllProjectTypes() {
    try {
      const projectTypes = await ProjectType.find();
      return projectTypes;
    } catch (error) {
      throw new Error(error);
    }
  }

  async updateProjectType(id, projectTypeData) {
    try {
      const updatedProjectType = await ProjectType.findByIdAndUpdate(id, projectTypeData, { new: true });
      return updatedProjectType;
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteProjectType(id) {
    try {
      await ProjectType.findByIdAndDelete(id);
    } catch (error) {
      throw new Error(error);
    }
  }
}
